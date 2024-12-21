class Rectengle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    get perimiter(){
        return (this.height+this.width)*2
    }
}
const rect1 = new Rectengle(5,2);

console.log(rect1.perimiter);

// 2
class Animal {
    constructor(animal,age,name){
        this.animal = animal;
        this.age = age;
        this.name = name
    }
}
const animal1 = new Animal("dog",5,"doggy");

class Mammal extends Animal {
    constructor(animal,name,ismammal) {
        super(animal,name);
        this.ismammal = ismammal;
    }
}

const mammal1 = new Mammal("cat","lucy",true);