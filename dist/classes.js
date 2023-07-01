class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `${this.name} - ${this.price}`;
    }
}
const car = new Car("BMW", 1000);
car.getInfo();
export {};
//# sourceMappingURL=classes.js.map