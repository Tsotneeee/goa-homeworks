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

const animal = new Animal("dog",9,"Rex");

console.log(animal.animalLog);

// inheritence
class Cat extends Animal{
    constructor(species,age,name,color){
        super(species,age,name)
        this.color = color;
    }
    catInfo(){
        return "cat is an animal"
    }
}

const mycat = new Cat("American Shorthair",3,"Luna","orange");

console.log(mycat.catInfo())