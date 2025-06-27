class Academy {
    static arr = [];
    constructor(name, numOfStudents, color) {
        this.name = name;
        this.numOfStudents = numOfStudents;
        this.color = color;
        Academy.arr.push(this);
    }
    get pixels() {
        return this.numOfStudents / 5;
    }
    get colums() {
        return `
        <div class="col" style="height: ${this.pixels}px; background-color: ${this.color}">
        <div class="name">${this.name}</div>
        <div class="numOfStudents">${this.numOfStudents}</div>
        </div>`;
    }
    static render() {
        let main = document.querySelector("main");
        for (let i = 0; i < Academy.arr.length; i++) {
            let Academy1 = Academy.arr[i];
            main.innerHTML += Academy1.colums;
        }
    }
}

new Academy("GOA", 2099, "green");
new Academy("Mziuri" , 101, "purple");
new Academy("IT step", 100, "blue");
Academy.render();