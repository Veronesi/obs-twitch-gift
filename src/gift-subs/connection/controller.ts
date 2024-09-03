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
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    this.SubscribeTwitch = SubscribeTwitch;
    this.Subscribe = new Subscribe(SubscribeTwitch);
  }

  start: FunctionRouter = (req, res) => {
    try {
      if (this.enable) {
        this.html(res, 'src/public/html/gift-subs/home.html');
        return;
      }
      this.Subscribe.execute({ onSubscription: this.onSubscription, onReSubscription: this.onReSubscription, onGiftSubscription: this.onGiftSubscription, onGiftRandomSubscription: this.onGiftRandomSubscription });
      this.enable = true;
      terminal.server('gift subs start successfully')
      this.html(res, 'src/public/html/gift-subs/home.html');
    } catch (error: any) {
      this.html(res, 'src/public/html/gift-subs/home.html');
      terminal.server(error.message);
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