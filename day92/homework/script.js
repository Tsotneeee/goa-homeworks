// 1
let set1 = new Set([1,2]);
let set2 = new Set([2,3]);
let set3 = new Set([3,4]);
let combine = new Set([...set1,...set2,...set3]);

// 3
let small = new Set([1,2]);
let big = new Set([1,2,3,4]);

console.log(big.has(small));

// 4
let str1 = "hello";

let map1 = new Map();
let temp = 0;

for (let i = 0 ; i < str1.length ; i++) {
    for (let j = 0 ; j < str1.length ; j++) {
        temp += (str1[j] == str1[i]) ? 1 : 0;
    }
    map1.set(str1[i],temp);
    temp = 0;
}

// 5
let map2 = new Map([["a",1],["b",2],["c",1]]);
let map4 = inverter(map2);

function inverter(m1) {
    let map3 = new Map();
    for ( let [key,value] of m1) {
        map3.set(value,key);
    }
    return map3
}

console.log(map4);
