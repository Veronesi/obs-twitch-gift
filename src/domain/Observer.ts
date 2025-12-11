export interface Observer<T> {
  observer: string;
  update(data: T): void;
}
