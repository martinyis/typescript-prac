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

const entity2 = <T>(args: T): T => {
  return args;
};

interface IPair<K, V> {
  key: K;
  value: V;
}

const pair1: IPair<number, string> = {
  key: 1,
  value: "Joe",
};

type TypeCity<R, V> = {
  city: R;
  country: V;
};

const city: TypeCity<string, string> = {
  city: "London",
  country: "UK",
};

type TypeLength = {
  length: number;
};
function getNameLength<T extends TypeLength>(entity: T): number {
  return entity.length;
}
