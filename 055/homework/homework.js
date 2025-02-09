// 1
let x = 5;

//2
let name = "Tsotne";

//3
const PI = 3.14;

//4
let y = x;

//5
let isStudent = true;

//6
let age;

//7
x = 10;

//8
let greeting = "hello world!"

//9
let height = null;

//10
let num = 2 + 3;

//11
let z = undefined;

//12
let total = 10 + 20;

//13
let language = "JavaScript";

//14
let isAvailable = false;

//15
let massage = "welcome to JavaScript";

//16
let pi = 3.14;

//17
let temperature = 25;

//18
let score = 100;

//19
let fullName = "tsotne bajelidze";

//20
let isOnline = false;

//21
function sayHello(){
    return "hello, world!";
};
console.log(sayHello());

//22
function addNumbers(a,b){
    return a + b;
};

//23
function getFullName(firstname,lastname){
    return firstname + lastname;
};
console.log(getFullName("tsotne","bajelidze"));

//24
function multiply(a,b){
    return a*b;
};
console.log(multiply(5,6));

//25
function isOdd(a){
    if (a%2===0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(8));

//26
function square(a){
    return a*a
}
console.log(square(5));

//27
//i dont know how to convert Celsius to Fahrenheit

//28
function isEqual(a,b){
    if (a===b){
        return true
    } else {
        return false
    }
}
console.log(isEqual(5,5));

//29
function subtract(a,b){
    return a - b;
}
console.log(subtract(7,4));

//30
function isGreater(a,b){
    if (a>b){
        return true
    } else {
        return false
    }
}
console.log(isGreater(8,5));

//31
function promptforname(name){
    return name
}
console.log(promptforname(prompt("your name: ")));

//32
function addTwoNumbers(a,b){
    return a + b
}
console.log(addTwoNumbers(prompt("num1"),prompt("num2")));

//33
function convertToNumbers(a){
    return Number(a)
}
alert(convertToNumbers(prompt("input num: ")));