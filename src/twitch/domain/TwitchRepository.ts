import { CommonUserstate, SubGiftUserstate, SubMethods, SubMysteryGiftUserstate, SubUserstate } from "./Twitch";

export type OnMessageProps = { channel: string; tags: CommonUserstate; message: string; };
export type OnMessage = (arg0: OnMessageProps) => void;

export type OnSubscriptionProps = { channel: string, username: string, methods: SubMethods, message: string, userstate: SubUserstate }
export type OnSubscription = (arg0: OnSubscriptionProps) => void;

export type OnReSubscriptionProps = { channel: string, username: string, month: number, message: string, userstate: SubUserstate, methods: SubMethods }
export type OnReSubscription = (arg0: OnReSubscriptionProps) => void;

export type OnGiftSubscriptionProps = { channel: string, username: string, streakMonths: number, recipient: string, methods: SubMethods, userstate: SubGiftUserstate };
export type OnGiftSubscription = (arg0: OnGiftSubscriptionProps) => void;

export type OnGiftRandomSubscriptionProps = { channel: string, username: string, numbOfSubs: number, methods: SubMethods, userstate: SubMysteryGiftUserstate };
export type OnGiftRandomSubscription = (arg0: OnGiftRandomSubscriptionProps) => void;

export abstract class TwitchRepository {
  client: any;
  connect(channel: string, username: string, password: string): Promise<void> {
    throw new Error("Method is not implemented");
  };
  onSubscription(fn: OnSubscription): void {
    throw new Error("Method is not implemented");
  };
  onGiftSubscription(fn: OnGiftSubscription): void {
    throw new Error("Method is not implemented");
  };
  onGiftRandomSubscription(fn: OnGiftRandomSubscription): void {
    throw new Error("Method is not implemented");
  };
  onReSubscription(fn: OnReSubscription): void {
    throw new Error("Method is not implemented");
  };
  onMessage(fn: OnMessage): void {
    throw new Error("Method is not implemented");
  };
  sendMessage(channel: string, message: string): void {
    throw new Error("Method is not implemented");
  };
}