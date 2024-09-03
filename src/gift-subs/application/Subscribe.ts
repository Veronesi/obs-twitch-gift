import { SubscribeTwitch } from "../../twitch/application/Subscribe";
import { OnSubscription, OnReSubscription, OnGiftSubscription, OnGiftRandomSubscription } from "../../twitch/domain/TwitchRepository";

type Props = {
  onSubscription?: OnSubscription;
  onReSubscription?: OnReSubscription;
  onGiftSubscription?: OnGiftSubscription;
  onGiftRandomSubscription?: OnGiftRandomSubscription;
}

export class Subscribe {
  SubscribeTwitch: SubscribeTwitch;
  constructor(SubscribeTwitch: SubscribeTwitch) {
    this.SubscribeTwitch = SubscribeTwitch;
  }

  execute = ({ onSubscription, onReSubscription, onGiftSubscription, onGiftRandomSubscription }: Props) => {
    if (onSubscription) this.SubscribeTwitch.listenSubs(onSubscription);
    if (onReSubscription) this.SubscribeTwitch.listenReSubs(onReSubscription);
    if (onGiftSubscription) this.SubscribeTwitch.listenGiftSubs(onGiftSubscription);
    if (onGiftRandomSubscription) this.SubscribeTwitch.listenGiftRandomSubs(onGiftRandomSubscription);
  }
}