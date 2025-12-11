import { Observer } from "src/domain/Observer";
import { Publisher } from "src/domain/Publisher";
import { singleton } from "tsyringe";

@singleton()
export class Log {
  private publisher: Publisher<string> = new Publisher<string>();
  emit(message: string) {
    console.log(message);
    this.publisher.notify(message);
  }

  subscribe(observer: Observer<string>) {
    this.publisher.subscribe(observer);
  }

  unSubscribe(observer: Observer<string>) {
    this.publisher.unsubscribe(observer);
  }
}
