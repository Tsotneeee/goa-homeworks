let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4];

function tester(a1,a2) {
    for (let i = 0, j = 0; i<a1.length, j<a2.length; i++, j++) {
        if (a1[i] != a2[j]) {
            return false
        }
    }
    return true
}

console.log(tester(arr1,arr2));