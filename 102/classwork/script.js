function task1() {
    return new Promise((resolve, reject) => resolve("შევამოწმოთ დავალება"))
}
function task2() {
    return new Promise((resolve, reject) => resolve("დავალება შესრულებულია"))
}
function task3() {
    return new Promise((resolve, reject) => resolve("დავალება შესრულდა წარმატებით"))
}

task1().then(result => setTimeout(() => console.log(result), 1000)).then(res => task2())
.then(result => setTimeout(() => console.log(result), 3000)).then(res => task3())
.then(result => setTimeout(() => console.log(result), 6000))