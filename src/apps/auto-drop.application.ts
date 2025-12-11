import { container, singleton } from "tsyringe";
import { ObserverMessageProps, Twitch } from "src/libs/Twitch";
import { Observer } from "src/domain/Observer";
import { Timer } from "src/libs/Timer";
import { Publisher } from "src/domain/Publisher";
import { OBS } from "src/libs/OBS";
import { Configs } from "src/domain/configs";
import { FileSystem } from "src/libs/file-system";

export type ObserverDropProps = { username: string };

@singleton()
export class AutoDrop {
  started: boolean = false;
  private participants: Set<string> = new Set<string>();
  private winners: Set<string> = new Set<string>();
  private clearParticipantsbeforeDrop: boolean = false;
  private publisherForDrop: Publisher<ObserverDropProps> =
    new Publisher<ObserverDropProps>();

  // Interval for dropping keys
  // This can be adjusted based on your requirements
  private dropInterval: number = 1000 * 60 * 1;
  private interval: NodeJS.Timeout | null = null;
  private intervalCooldown: NodeJS.Timeout | null = null;
  private dropCooldown: number = 0; // Cooldown in milliseconds before the next drop can occur

  constructor() {
    const conf = container.resolve(Configs).autoDrop;
    this.dropInterval = conf.dropInterval;
  }

  stop() {
    this.started = false;
    container.resolve(Twitch).unSubscribeToMessage(this.onMessage);
    if (this.interval) {
      clearInterval(this.interval);
      clearInterval(this.intervalCooldown!);
      this.intervalCooldown = null;
      this.interval = null;
      container.resolve(OBS).writeCooldown("");
      container.resolve(OBS).writeText("");
    }
  }

  getDropInterval() {
    return this.dropInterval;
  }

  isEnabled() {
    return this.started;
  }

  setDropInterval(interval: number) {
    this.dropInterval = interval;
    const conf = container.resolve(Configs);
    conf.update({
      autoDrop: { ...conf.autoDrop, dropInterval: interval },
    });
  }

  start() {
    if (this.started) return;
    this.started = true;
    container.resolve(Twitch).subscribeToMessage(this.onMessage);
    container.resolve(OBS).connect();
    container.resolve(OBS).writeCooldown(
      Timer.toDigitalClock({
        miliseconds: this.dropInterval,
        display: "minute",
      })
    );
    this.dropCooldown = this.dropInterval;
    if (this.intervalCooldown) {
      clearTimeout(this.intervalCooldown);
      this.intervalCooldown = null;
    }
    this.intervalCooldown = setInterval(() => {
      this.dropCooldown = this.dropCooldown - 1000;
      container.resolve(OBS).writeCooldown(
        Timer.toDigitalClock({
          miliseconds: this.dropCooldown,
          display: "minute",
        })
      );
    }, 1000);
    this.interval = setInterval(() => {
      this.dropKey();
    }, this.dropInterval);
  }

  reset() {
    this.dropCooldown = this.dropInterval;
    container.resolve(OBS).writeCooldown(
      Timer.toDigitalClock({
        miliseconds: this.dropInterval,
        display: "minute",
      })
    );
    if (this.intervalCooldown) {
      clearTimeout(this.intervalCooldown);
      this.intervalCooldown = null;
    }
    this.intervalCooldown = setInterval(() => {
      this.dropCooldown = this.dropCooldown - 1000;
      container.resolve(OBS).writeCooldown(
        Timer.toDigitalClock({
          miliseconds: this.dropCooldown,
          display: "minute",
        })
      );
    }, 1000);
    if (this.clearParticipantsbeforeDrop) this.participants.clear();
  }

  getParticipants() {
    return Array.from(this.participants);
  }

  getWinners() {
    return Array.from(this.winners);
  }

  dropKey() {
    if (!this.started) return;
    if (this.participants.size === 0) return;
    const participantsArray = Array.from(this.participants);
    const randomIndex = Math.floor(Math.random() * participantsArray.length);
    const winner = participantsArray[randomIndex];
    container.resolve(OBS).writeText(winner);
    this.winners.add(winner);
    container
      .resolve(FileSystem)
      .write([...this.winners].join("\n"), "auto-drop.txt");
    this.reset();
    this.publisherForDrop.notify({ username: winner });
    return winner;
  }

  onMessage: Observer<ObserverMessageProps> = {
    observer: "AutoDrop",
    update: (data: ObserverMessageProps) => {
      if (!this.started) return;
      this.participants.add(data.username);
    },
  };

  subscribeToDrop(observer: Observer<ObserverDropProps>) {
    this.publisherForDrop.subscribe(observer);
  }

  unSubscribeToDrop(observer: Observer<ObserverDropProps>) {
    this.publisherForDrop.unsubscribe(observer);
  }
}
