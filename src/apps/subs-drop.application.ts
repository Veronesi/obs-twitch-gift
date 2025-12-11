import { container, singleton } from "tsyringe";
import { ObserverSubscriptionProps, Twitch } from "src/libs/Twitch";
import { Observer } from "src/domain/Observer";
import { Publisher } from "src/domain/Publisher";

export type Method = "prime" | "gift" | "mystery" | "sub" | "unknown";

export type SubscriptionHistory = {
  username: string;
  timestamp: number;
  winner: boolean;
  method: Method;
  shares: number;
};

export type ObserverDropProps = { winner: string; substitute: string };
export type ObserverForNewParticipantProps = SubscriptionHistory;

@singleton()
export class SubsDrop {
  started: boolean = false;
  private subscriptionsHistory: SubscriptionHistory[] = [];
  private winners: { winner: string; substitute: string }[] = [];
  private publisherForDrop: Publisher<ObserverDropProps> =
    new Publisher<ObserverDropProps>();
  private publisherForNewParticipant: Publisher<ObserverForNewParticipantProps> =
    new Publisher<ObserverForNewParticipantProps>();

  stop() {
    this.started = false;
    container.resolve(Twitch).unSubscribeToSubscription(this.onSubscription);
  }

  start() {
    if (this.started) return;
    this.started = true;
    container.resolve(Twitch).subscribeToSubscription(this.onSubscription);
  }

  dropKey() {
    if (this.subscriptionsHistory.length === 0) return;

    const participants: string[] = this.subscriptionsHistory
      .filter((sub) => !sub.winner)
      .map((sub) => new Array(sub.shares).fill(sub.username))
      .flat();
    if (participants.length === 0) return;
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];

    const substitutes: string[] = participants.filter((sub) => sub !== winner);
    const randomSubstituteIndex = Math.floor(
      Math.random() * substitutes.length
    );
    const substitute = substitutes[randomSubstituteIndex];
    this.winners.push({ winner, substitute });
    this.publisherForDrop.notify({ winner, substitute });
    // marcamos como ganadores a ambos participantes
    this.subscriptionsHistory = this.subscriptionsHistory.map((sub) => {
      if (sub.username === winner || sub.username === substitute) {
        return { ...sub, winner: true };
      }
      return sub;
    });
  }

  isEnabled() {
    return this.started;
  }

  addParticipant({
    username,
    method,
    shares,
  }: {
    username: string;
    method: Method;
    shares: number;
  }) {
    if (!this.started) return;
    const participant = {
      username,
      timestamp: Date.now(),
      winner: false,
      method,
      shares,
    };

    // verificamos que no sea un valor duplicado cuando un 'gift' viene luego de un 'mystery'
    const isDuplicate = this.subscriptionsHistory.some(
      (sub) =>
        sub.username === participant.username &&
        sub.method === "mystery" &&
        sub.timestamp - participant.timestamp < 1500
    );
    if (isDuplicate) return;

    this.subscriptionsHistory.push(participant);
    this.publisherForNewParticipant.notify(participant);
  }

  getWinners() {
    return this.winners;
  }

  getSubscriptionsHistory() {
    return this.subscriptionsHistory;
  }

  onSubscription = {
    observer: "SubsDrop",
    update: ({ username, method, shares }: ObserverSubscriptionProps) => {
      this.addParticipant({ username, method, shares });
    },
  };

  subscribeToDrop(observer: Observer<ObserverDropProps>) {
    this.publisherForDrop.subscribe(observer);
  }

  unSubscribeToDrop(observer: Observer<ObserverDropProps>) {
    this.publisherForDrop.unsubscribe(observer);
  }

  subscribeToNewParticipant(
    observer: Observer<ObserverForNewParticipantProps>
  ) {
    this.publisherForNewParticipant.subscribe(observer);
  }

  unSubscribeToNewParticipant(
    observer: Observer<ObserverForNewParticipantProps>
  ) {
    this.publisherForNewParticipant.unsubscribe(observer);
  }
}
