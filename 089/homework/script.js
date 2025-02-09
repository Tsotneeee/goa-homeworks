// 1
function mapper(std,scr,lmt) {
    let students = new Map();

    for ( let i = 0; i < lmt ; i++) {
        students.set(std,scr);
    }
    return students
}

let students_Arr = [["luka","sandro","saba"],[9,6,7]];

console.log(mapper(students_Arr[0],students_Arr[1],students_Arr[0].length));

// 2


let arr1 = [1,1,2,4,6,5,5];


function setter(arr) {
    let set1 = new Set([]);

    for ( let j = 0 ; j < arr.length ; j++ ) {
        set1.add(arr[j]);
    }
    return set1
}

console.log(setter(arr1));

// 3
const STDs = new Map([
    ["luka",9],
    ["sandro",7],
    ["saba",6]
]);

function plusFive(map1) {
    let stds = new Map();

    for (let [x,y] of map1) {
        stds.set(x,y+5)
    }

    return stds
}

console.log(plusFive(STDs))