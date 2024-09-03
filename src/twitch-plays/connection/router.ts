import { Router } from "../../shared/domain/Router";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { TwitchPlaysController } from "./controller";

export class TwitchPlaysRouter extends Router {
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    const controller = new TwitchPlaysController(SubscribeTwitch);
    this.get('start', controller.start);
    this.get('stop', controller.stop);
    this.get('get-messages', controller.getMessages);
    this.get('clear', controller.clear);
    this.get('', controller.renderHome);
  }
}