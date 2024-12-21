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
