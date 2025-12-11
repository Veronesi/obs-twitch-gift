import { Observer } from "./Observer";

export class Publisher<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter(
      (obs) => obs.observer !== observer.observer
    );
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer.update(data));
  }
}
