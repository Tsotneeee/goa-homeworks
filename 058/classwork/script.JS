const phone = 1900;
let budget = prompt("enter your budget");

// ...
if (budget >= phone) {
    console.log("you can buy it");
} else {
    console.log("you cant buy it");
}

// ...
for (let i = 20; i >= 0; i--) {
    console.log(i);
}

// ...
function forloop(end){
    let nums = 0;
    for (let i = 0; i < end; i++) {
        if (i%2==0) {
            nums += i;
        }
    }
    return nums
}
console.log(forloop(30));
