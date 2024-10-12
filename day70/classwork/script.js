const array = [1,2,3,4,5,6,9,8,7];

const myarr = array.forEach((value) => {
    console.log(value)
});

// ____
console.log("^_------------_^");
// ^^^^
let sum = 0;

const mysum = array.forEach((value) => {
    sum += value;
});
console.log(sum);
