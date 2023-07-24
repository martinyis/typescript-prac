class Car {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

const car = new Car("BMW", 1000);

car.getInfo();
