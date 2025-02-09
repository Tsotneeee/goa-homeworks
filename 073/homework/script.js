// car class
class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model; 
    }
    get carLog(){
        return `model of this car is ${this.model} and brand is ${this.brand}`
    }
}
const car = new Car("BMW","M4");
console.log(car.carLog);
// animal class
class Animal {
    constructor(species,age,name){
        this.species = species;
        this.age = age;
        this.name = name;
    }
    get animalLog(){
        return `animal is a ${this.species}, it's name is ${this.name} and it's ${this.age} years old.`
    }
}
const animal = new Animal("dog",5,"lucy");
console.log(animal.animalLog);
// person class
class Person {
    constructor(name,age,height,weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    get personalInfo(){
        return `${this.name} is ${this.age} years old, his heigth is ${this.height} and his weight is ${this.weight} kg!`
    }
}
const human = new Person("Tsotne",14,180,51);
console.log(human.personalInfo)