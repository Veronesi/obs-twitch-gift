import { Configs } from "src/domain/configs";
import { Observer } from "src/domain/Observer";
import { Publisher } from "src/domain/Publisher";
import { ObserverMessageProps, Twitch } from "src/libs/Twitch";
import { container, singleton } from "tsyringe";

export type ObserverVotesProps = { categories: Category[] };
export type Category = {
  name: string;
  id: string;
  voted: boolean;
  games: {
    name: string;
    uri: string;
    votes: number;
    option: string;
    wins?: boolean;
  }[];
  updatedAt?: number;
};

@singleton()
export class GameAwardsApplication {
  started: boolean = false;
  participants: Set<string> = new Set<string>();
  categorySelected: string | null = null;
  categories: Category[] = [];

  private publisherForVotes: Publisher<ObserverVotesProps> =
    new Publisher<ObserverVotesProps>();

  private publisherForWin: Publisher<ObserverVotesProps> =
    new Publisher<ObserverVotesProps>();

  start() {
    if (this.started) return;
    this.started = true;
    container.resolve(Twitch).subscribeToMessage(this.onMessage);
  }

  isEnabled() {
    return this.started;
  }

  constructor() {
    this.categories = container.resolve(Configs).gameAwards.categories;
  }

  onMessage: Observer<ObserverMessageProps> = {
    observer: "GameAwards",
    update: (data: ObserverMessageProps) => {
      if (!this.started) return;
      if (this.participants.has(data.username)) return;
      this.participants.add(data.username);

      // para testear siempre cortamos los textos
      data.message = data.message.substring(0, 1);

      const vote = data.message.trim().toUpperCase();
      if (vote.length !== 1) return;
      // buscamos la categoria seleccionada
      for (const category of this.categories) {
        if (category.id !== this.categorySelected) continue;
        if (category.voted) return;
        for (const game of category.games) {
          if (game.option !== vote) continue;

          this.categories[0].updatedAt = Date.now();
          game.votes += 1;

          // verificamos si va ganando
          const maxVotes = Math.max(...category.games.map((g) => g.votes));
          for (const game of category.games) {
            game.wins = game.votes === maxVotes;
          }

          // notificamos el voto
          this.publisherForVotes.notify({
            categories: this.categories,
          });
        }
      }
    },
  };

  startVoting(category: string) {
    this.start();
    const cat = this.categories.find((c) => c.id === category);
    if (!cat) return;

    // limpiamos votos anteriores
    for (const game of cat.games) {
      game.votes = 0;
      game.wins = false;
    }
    cat.voted = false;

    this.categorySelected = category;
    this.participants.clear();
    this.started = true;
  }

  stopVoting() {
    this.started = false;

    // Tally votes
    const cat = this.categories.find((c) => c.id === this.categorySelected);
    if (!cat) return;

    cat.voted = true;
    this.participants.clear();
    this.started = true;
    this.categorySelected = null;

    // Guardamos la configuracion
    container
      .resolve(Configs)
      .update({ gameAwards: { categories: this.categories } });

    this.publisherForWin.notify({
      categories: this.categories,
    });
  }

  subscribeToVotes(observer: Observer<ObserverVotesProps>) {
    this.publisherForVotes.subscribe(observer);
  }

  unSubscribeToVotes(observer: Observer<ObserverVotesProps>) {
    this.publisherForVotes.unsubscribe(observer);
  }

  subscribeToWin(observer: Observer<ObserverVotesProps>) {
    this.publisherForWin.subscribe(observer);
  }

  unSubscribeToWin(observer: Observer<ObserverVotesProps>) {
    this.publisherForWin.unsubscribe(observer);
  }
}
