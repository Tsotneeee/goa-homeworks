// 1
const coords = [[2,5,7],[4,6,9]];

for (j = 0; j<coords[0||1].length; j++) {
    console.log(`rows: ${coords[0][j]} , cols: ${coords[1][j]}`)
}

// 2
const arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = [[],[],[],[],[],[],[],[],[]];

for (i = 0; i<arr1.length; i++) {
    for (j = 0; j<arr1.length; j++) {
        arr2[i].push(arr1[i]*arr1[j])
    }
}
console.log(arr2);

