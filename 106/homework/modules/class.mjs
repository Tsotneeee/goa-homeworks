export function classes(name,age,lastname) {
    class persona {
        constructor(name,age,lastname) {
            this.name = name;
            this.age = age;
            this.lastname = lastname;
        }
        get printer() {
            return this.name + " " + this.age + " " + this.lastname;
        }
    }
    let person = new persona(name,age,lastname);
    return person.printer;
}