class Animal {
    constructor(habitate,age,name,animal) {
        this.habitate = habitate;
        this.age = age;
        this.name = name;
        this.animal = animal;
    }
    get outInfo(){
        return `${this.name} is ${this.age} years old and it lives in ${this.habitate}`
    }
    get animalName(){
        return "animal is a " + this.animal
    }
}
const animals = new Animal("China",7,"Leo","tiger");

document.getElementById('mypara').textContent = animals.animalName;
document.getElementById('mypara2').textContent = animals.outInfo;

// animal 2

const cat1 = new Animal("forest",3,"Lucy","cat");

document.getElementById('mycat2').textContent = cat1.animalName;
document.getElementById('mycat3').textContent = cat1.outInfo;