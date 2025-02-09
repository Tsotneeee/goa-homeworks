// 3
const arr1 = [[1,2,5,7],[4,6,2,3],[7,2,9,5],[8,2,1,3]];
let num = 1;
let num2 = 1;

for (i=0,j=arr1.length-1; i<arr1.length, j>=0 ; i++, j--) {
    num2 *= arr1[i][j];
    num *= arr1[i][i];
}

console.log(`right and down: ${num} , right and up: ${num2}`);