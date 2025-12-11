export interface Singleton<T> {
  getInstance(): T;
}
export class SingletonFactory<T> {
  private instance: T | null = null;

  constructor(private createInstance: () => T) {}

  getInstance(): T {
    if (!this.instance) {
      this.instance = this.createInstance();
    }
    return this.instance;
  }
}

// example usage
// const mySingleton = new SingletonFactory(() => new MyClass()).getInstance();
// mySingleton.doSomething();
