let lst = [1,5,5,9,7,7,5,5,5,1,6] //* 2 5 5 1 2 2 5 5 5 2 1
let map1 = new Map();

for (let i = 0; i < lst.length; i++) {
    map1.set(lst[i], (map1.get(lst[i]) || 0) + 1);
}

console.log(map1);