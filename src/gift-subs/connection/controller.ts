import { HttpController } from "src/shared/domain/HttpController";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { FunctionRouter } from "src/shared/domain/Router";
import { Subscribe } from "../application/Subscribe";
import { OnGiftRandomSubscription, OnGiftSubscription, OnReSubscription, OnSubscription } from "src/twitch/domain/TwitchRepository";
import { terminal } from "src/shared/helper/terminal";

type TypeSubscription = "prime" | "gift" | "normal";

type History = {
  username: string;
  counter: number;
  type: TypeSubscription;
  recipient?: string;
}

type Participant = {
  username: string;
  counter: number;
  ids: string[]
}

type AddParticipantProps = {
  username: string;
  counter: number;
  id?: string;
  type: TypeSubscription;
  recipient?: string;
  random?: boolean;
}

export class GiftSubsController extends HttpController {
  SubscribeTwitch: SubscribeTwitch;
  Subscribe: Subscribe;
  participants: Participant[] = [];
  history: History[] = [];
  enable: boolean = false;
  winners: string[] = [];
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    this.SubscribeTwitch = SubscribeTwitch;
    this.Subscribe = new Subscribe(SubscribeTwitch);
  }

  start: FunctionRouter = (req, res) => {
    try {
      if (this.enable) {
        this.enable = false;
        this.json(res, { success: true, message: 'Aguanta amigo, ya está escaneando' })
        // this.html(res, 'src/public/html/gift-subs/home.html');
        return;
      }
      terminal.server('Dropkey inicializado correctamente');
      this.Subscribe.execute({ onSubscription: this.onSubscription, onReSubscription: this.onReSubscription, onGiftSubscription: this.onGiftSubscription, onGiftRandomSubscription: this.onGiftRandomSubscription });
      this.enable = true;
      this.json(res, { success: true, message: 'Esperando subscripciones...' })
      // this.html(res, 'src/public/html/gift-subs/home.html');
    } catch (error: any) {
      this.json(res, { success: false, message: error.message })
      // this.html(res, 'src/public/html/gift-subs/home.html');
      terminal.server(error.message);
    }
  }

  dropKey: FunctionRouter = (req, res) => {
    try {
      let users: Array<string> = [];
      const winners = ['', ''];
      this.participants.forEach(e => users = [...users, ...Array(e.counter).fill(e.username)]);

      // verificamos si ya gano
      users = users.filter(user => !this.winners.includes(user));

      // obtenemos ganador
      const numberWinner = parseInt(String(Math.random() * users.length));
      users[numberWinner];

      this.winners.push(users[numberWinner]);
      winners[0] = users[numberWinner];

      // lo eliminamos de los participantes
      users = users.filter(user => user != users[numberWinner]);

      // obtenemos el suplente
      const numberSupplent = parseInt(String(Math.random() * users.length));
      users[numberSupplent];

      this.winners.push(users[numberSupplent]);
      winners[1] = users[numberSupplent];

      this.json(res, { success: true, winners: winners })

    } catch (error: any) {
      this.json(res, { message: error.message });
    }
  }

  state: FunctionRouter = (req, res) => {
    try {
      const winners = [];
      for (let i = 0; i < this.winners.length - 1; i += 2) {
        winners.push([this.winners[i], this.winners[i + 1]])
      }
      this.json(res, {
        success: true,
        enable: this.enable,
        winners
      });
    } catch (error: any) {
      this.json(res, { success: false, error: error.message });
    }
  }

  getParticipants: FunctionRouter = (req, res) => {
    try {
      this.json(res, {
        history: this.history,
        participants: this.participants
      });
    } catch (error: any) {
      this.json(res, { success: true, error: error.message });
    }
  }

  onSubscription: OnSubscription = ({ username, methods }) => {
    if (!this.enable) return;
    this.addParticipant({ username, counter: 1, type: methods.prime ? 'prime' : 'normal' });
  }

  onReSubscription: OnReSubscription = ({ username, methods }) => {
    if (!this.enable) return;
    this.addParticipant({ username, counter: 1, type: methods.prime ? 'prime' : 'normal' });
  }

  onGiftSubscription: OnGiftSubscription = ({ username, userstate, recipient }) => {
    if (!this.enable) return;
    this.addParticipant({ username, counter: 1, type: 'gift', id: userstate["msg-param-origin-id"], recipient })
  }

  onGiftRandomSubscription: OnGiftRandomSubscription = ({ username, numbOfSubs, userstate }) => {
    if (!this.enable) return;
    this.addParticipant({ username, counter: numbOfSubs, type: 'gift', id: userstate["msg-param-origin-id"], random: true })
  }

  addParticipant = ({ username, counter, id, random, type, recipient }: AddParticipantProps) => {
    try {
      this.history.push({
        username,
        counter,
        type,
        recipient
      });
      // verificamos si ya esta participando
      const participantIndex = this.participants.findIndex(participant => participant.username == username);
      if (participantIndex == -1) {
        this.participants.push({
          username,
          counter,
          ids: id ? [id] : []
        })
        return;
      }

      // obtenemos el participante
      const participant = this.participants[participantIndex];

      // verificamos si es una sub regalada ya existe (es un giftRandomSubscription)
      if (id && !random && participant.ids.includes(id)) return;

      // verificamos si es giftRandomSubscription (y ya se cargó una como una sup regalada normal)
      if (id && random && participant.ids.includes(id)) participant.counter -= 1;

      participant.counter += counter;
      if (id) participant.ids.push(id);

      this.participants[participantIndex] = participant;
    } catch (error: any) {
      terminal.server(error.message);
    }
  }
}