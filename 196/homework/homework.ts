// 1
function printID(id: number | string): string {
    return (id === Number(id)) ? "number":"string"
}
// 2
function getLength( st : string | string[] ): number {
    return st.length
}
// 3
function check( inp : number | string ): boolean{
    if (inp === Number(inp)){
        return (inp == 0) ? false : true
    } else {
        return (inp == "") ? false : true
    }
}
// 4
function getArea(shape: "circle"|"rect" , inp : number | number[] ): number{
    if ( shape === "circle" ) {
        if (typeof inp !== "number") {
            throw new Error("Circle area requires a numeric radius")
        }
        const r = inp
        return Math.PI * r * r
    } else {
        if (!Array.isArray(inp) || inp.length < 2) {
            throw new Error("Rectangle area requires an array [width, height]")
        }
        const [w, h] = inp as number[]
        if (h === undefined || w === undefined) {
            throw new Error("Rectangle area requires an array [width, height] with at least two elements")
        }
        return w * h
    }
}
// 5
function combine(inp : string | number, inp2 : string | number): string | number {
    return (typeof inp === "string" && typeof inp2 === "string") ? inp + inp2 : Number(inp) + Number(inp2);
}

// 1 (literal)
function move( direction : "up" | "down" | "left" | "right" ): string{
    return `Moving ${direction} direction`
}
// 2
let THEvarieble: "admin" | "user" | "guest" = "admin"
// 3
function trafficLight( light : "red" | "yellow" | "green" ): string {
    if ( light == "red" ) {
        return "stop"
    } else if (light == "yellow") {
        return "wait"
    } else {
        return "go"
    }
}
// 4
function makeRequest( req : "GET" | "POST" | "PUT" | "DELETE" ): string {
    return `making ${req} request`
}
// 5
function rollDice(): string | undefined {
    let options = ["one","two","three","four","five","six"]
    let idx = Math.floor(Math.random() * options.length)
    return options[idx]
}

// 1 (classes)
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;    
    }
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 3
class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
    getBalance(): number {
        return this.balance;
    }
}

// 4
class MathHelper {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
    static multiply(a: number, b: number): number {
        return a * b;
    }
}

// 5
class User {
    private password: string;
    constructor(password: string) {
        this.password = password;
    }
    get getPassword(): string {
        return "*".repeat(this.password.length);
    }
    set setPassword(newPassword: string) {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        this.password = newPassword;
    }
}