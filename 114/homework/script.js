class Car {
    static cars = [];
    constructor(car) {
        this.car = car;
        Car.cars.push(car);
    }
    static getCars() {
        console.log(this.cars);
    }
}

new Car('BMW');
new Car('Mercedes');
new Car('Audi');
Car.getCars();