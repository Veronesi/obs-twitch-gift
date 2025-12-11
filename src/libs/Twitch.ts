import { Client } from "tmi.js";
import { Observer } from "../domain/Observer";
import { Publisher } from "../domain/Publisher";
import { container, singleton } from "tsyringe";
import { Configs } from "../domain/configs";
import { Log } from "./log";

export type ObserverMessageProps = { username: string; message: string };
export type ObserverSubscriptionProps = {
  username: string;
  method: "prime" | "gift" | "mystery" | "sub";
  shares: number;
};

@singleton()
export class Twitch {
  public isConnected = false;
  private client: Client;

  private publisherForMessage: Publisher<ObserverMessageProps> =
    new Publisher<ObserverMessageProps>();
  private publisherForSubscription: Publisher<ObserverSubscriptionProps> =
    new Publisher<ObserverSubscriptionProps>();

  constructor() {
    const configs = container.resolve(Configs).twitch;
    this.client = new Client({
      options: { debug: false },
      connection: {
        secure: true,
        reconnect: true,
      },
      identity: {
        username: configs.username,
        password: configs.oauth,
      },
      channels: [configs.channels],
    });
  }

  public async reconnect() {
    await this.disconect();
    const configs = container.resolve(Configs).twitch;
    this.client = new Client({
      options: { debug: false },
      connection: {
        secure: true,
        reconnect: true,
      },
      identity: {
        username: configs.username,
        password: configs.oauth,
      },
      channels: [configs.channels],
    });
    await this.connect();
  }

  public async disconect() {
    if (!this.isConnected) return;
    await this.client.disconnect();
    this.isConnected = false;
  }

  public async connect() {
    if (this.isConnected) return;
    try {
      await this.client.connect();
      this.isConnected = true;
    } catch (error: any) {
      container
        .resolve(Log)
        .emit("Error conectando a Twitch: " + error.message);
      this.isConnected = false;
      return;
    }

    this.client.on("message", (_channel, tags, message) => {
      if (!tags.username) return;
      this.publisherForMessage.notify({
        username: tags.username,
        message,
      });
    });

    this.client.on("subscription", (_channel, username, method) => {
      this.publisherForSubscription.notify({
        username,
        method: method.prime ? "prime" : "sub",
        shares: 1,
      });
    });

    this.client.on(
      "resub",
      (_channel, username, _months, _message, _userstate, methods) => {
        this.publisherForSubscription.notify({
          username,
          method: methods.prime ? "prime" : "sub",
          shares: 1,
        });
      }
    );

    this.client.on(
      "subgift",
      (_channel, username, _recipient, _methods, _userstate, _lastGift) => {
        this.publisherForSubscription.notify({
          username,
          method: "gift",
          shares: 1,
        });
      }
    );

    this.client.on(
      "submysterygift",
      (_channel, username, numOfSubs, _methods, _userstate) => {
        this.publisherForSubscription.notify({
          username,
          method: "mystery",
          shares: numOfSubs,
        });
      }
    );
  }

  subscribeToMessage(observer: Observer<ObserverMessageProps>) {
    this.publisherForMessage.subscribe(observer);
  }

  unSubscribeToMessage(observer: Observer<ObserverMessageProps>) {
    this.publisherForMessage.unsubscribe(observer);
  }

  subscribeToSubscription(observer: Observer<ObserverSubscriptionProps>) {
    this.publisherForSubscription.subscribe(observer);
  }

  unSubscribeToSubscription(observer: Observer<ObserverSubscriptionProps>) {
    this.publisherForSubscription.unsubscribe(observer);
  }
}
