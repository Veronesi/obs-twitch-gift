import tmi from 'tmi.js';
import { OnGiftRandomSubscription, OnGiftSubscription, OnMessage, OnReSubscription, OnSubscription, TwitchRepository } from "../domain/TwitchRepository";
import { terminal } from 'src/shared/helper/terminal';

export class TwitchTmiRepository extends TwitchRepository {
  client: tmi.Client;

  async connect(channel: string, username: string, password: string): Promise<void> {
    try {
      this.client = new tmi.Client({
        options: { debug: false },
        connection: {
          secure: true,
          reconnect: true,
        },
        identity: {
          username,
          password,
        },
        channels: [channel],
      });
      await this.client.connect();
    } catch (error: any) {
      terminal.twitch(error);
    }
  }

  onSubscription(fn: OnSubscription): void {
    this.client.on('subscription', (channel, username, methods, message, userstate) => {
      fn({ channel, username, methods, message, userstate });
    })
  }

  onGiftSubscription(fn: OnGiftSubscription): void {
    this.client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
      fn({ channel, username, streakMonths, recipient, methods, userstate });
    })
  }

  onGiftRandomSubscription(fn: OnGiftRandomSubscription): void {
    this.client.on('submysterygift', (channel, username, numbOfSubs, methods, userstate) => {
      fn({ channel, username, numbOfSubs, methods, userstate });
    })
  }

  onReSubscription(fn: OnReSubscription): void {
    this.client.on('resub', (channel, username, month, message, userstate, methods) => {
      fn({ channel, username, month, message, userstate, methods });
    });
  }

  onMessage(fn: OnMessage): void {
    this.client.on('message', (channel, tags, message) => {
      fn({ channel, tags, message });
    });
  }

  sendMessage(channel: string, message: string): void {
    this.client.say(channel, message);
  }
}