import { Router } from "../../shared/domain/Router";
import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { GiftSubsController } from "./controller";

export class GiftSubsRouter extends Router {
  constructor(SubscribeTwitch: SubscribeTwitch) {
    super();
    const controller = new GiftSubsController(SubscribeTwitch);
    this.get('start', controller.start);
    this.get('get-subs', controller.start);
    this.get('get-messages', controller.getParticipants);
  }
}