import { OnGiftRandomSubscription, OnGiftSubscription, OnMessage, OnReSubscription, OnSubscription, TwitchRepository } from "../domain/TwitchRepository";

export class SubscribeTwitch {
  private listenMessageList: OnMessage[] = [];
  private listenSubscribeList: OnSubscription[] = [];
  private listenReSubscribeList: OnReSubscription[] = [];
  private listenGiftSubscribeList: OnGiftSubscription[] = [];
  private listenGiftRandomSubscribeList: OnGiftRandomSubscription[] = [];
  TwitchRepository: TwitchRepository;
  constructor(TwitchRepository: TwitchRepository) {
    this.TwitchRepository = TwitchRepository;
  }

  connect(): void {
    this.startListenMessage();
    this.startListenSubs();
    this.startListenReSubs();
    this.startListenGiftSubs();
    this.startListenGiftRandomSubs();
  }

  listenMessage(fn: OnMessage): void {
    this.listenMessageList.push(fn);
  }

  listenSubs(fn: OnSubscription): void {
    this.listenSubscribeList.push(fn);
  }

  listenGiftSubs(fn: OnGiftSubscription): void {
    this.listenGiftSubscribeList.push(fn);
  }

  listenGiftRandomSubs(fn: OnGiftRandomSubscription): void {
    this.listenGiftRandomSubscribeList.push(fn);
  }

  listenReSubs(fn: OnReSubscription): void {
    this.listenReSubscribeList.push(fn);
  }

  startListenGiftSubs = () => {
    this.TwitchRepository.onGiftSubscription((props) => {
      for (const fn of this.listenGiftSubscribeList) {
        fn(props);
      }
    })
  }

  startListenReSubs = () => {
    this.TwitchRepository.onReSubscription((props) => {
      for (const fn of this.listenReSubscribeList) {
        fn(props);
      }
    })
  }

  startListenSubs = () => {
    this.TwitchRepository.onSubscription((props) => {
      for (const fn of this.listenSubscribeList) {
        fn(props);
      }
    })
  }

  startListenMessage = (): void => {
    this.TwitchRepository.onMessage((props) => {
      for (const fn of this.listenMessageList) {
        fn(props);
      }
    })
  }

  startListenGiftRandomSubs = (): void => {
    this.TwitchRepository.onGiftRandomSubscription((props) => {
      for (const fn of this.listenGiftRandomSubscribeList) {
        fn(props);
      }
    })
  }
}