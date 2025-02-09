// 1
const arr = [1,2,3,4,6,5,8,9,2];
function conLog(num){
    console.log(num)
}
arr.forEach(conLog);

// 2
let sum = 0;
const numbers = [,5,3,4,9,5,10,22,6];

numbers.forEach(summery);

function summery(number) {
  sum += number;
}

console.log(sum);

// 3
const std =["Luka","Tsotne","Andria","Saba","Sandro"];
function stdprint(ppl){
    console.log(`${ppl} is a student`)
}
std.forEach(stdprint);

// 4
const array = [1,2,8,2,4,5,8,9,7];
let newArray = [];

function doubleNum(itm){
    newArray.push(itm*itm)
}

array.forEach(doubleNum);

