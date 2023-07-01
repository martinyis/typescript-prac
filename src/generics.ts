function entity<T>(args: T): T {
  return args;
}

console.log(entity<number>(1));

class Channel<T> {
  private name: T;

  constructor(name: T) {
    this.name = name;
  }

  getName(): T {
    return this.name;
  }
}
