import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { OnMessage } from "../../twitch/domain/TwitchRepository";

export class Message {
  SubscribeTwitch: SubscribeTwitch;
  constructor(SubscribeTwitch: SubscribeTwitch) {
    this.SubscribeTwitch = SubscribeTwitch;
  }

  execute(fn: OnMessage) {
    this.SubscribeTwitch.listenMessage(fn);
  }
}