function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    return arr;
}}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const people = [{ name: 'kote', age: 10 }, { name: 'giga', age: 23 }, { name: 'daviti', age: 60 }, { name: 'cotne', age: 23 }];

function countingSort(array, maxAge) {

    const n = array.length;
    const output = new Array(n);
    const count = new Array(maxAge + 1).fill(0);

    for (let i = 0; i < n; i++) { // adds to count array C[10] = 1, C[23] = 2, C[60] = 1
        count[array[i].age]++;
    }

    for (let i = 1; i <= maxAge; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const person = array[i];
        const age = person.age;
        const position = count[age] - 1;

        output[position] = person;
        count[age]--;
    }

    return output;
}

console.log(countingSort(people, 60));