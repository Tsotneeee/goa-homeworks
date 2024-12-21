let arr = [];

for (let i = 1; i<101 ; i++) {
    arr.push(i)
}

let num = 0;
for (let j = 0 ; j<100 ; j++) {
    if (arr[j] % 2 == 0) {
        num += arr[j]
    }
}