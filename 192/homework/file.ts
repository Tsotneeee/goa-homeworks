// 1
function EvenOrOdd(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(EvenOrOdd(4));

// 2
function mature(age: number): string {
    return age >= 18 ? "Mature" : "Immature";
}

console.log(mature(20));

// 3
function empty(st: string): string {
    return st == "" ? "empty" : "not empty";
}

console.log(empty(""));

// 4
function bigger(num1:number, num2:number) : number {
    return num1 > num2 ? num1 : num2;
}

console.log(bigger(10, 20));

// 5
function secure(psw:string) :string {
    return psw.length >= 8 ? "strong" : "weak"
}

console.log(secure("fbnwuafbhwu"));

