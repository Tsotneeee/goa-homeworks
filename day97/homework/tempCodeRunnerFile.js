function fn1() {
//     return new Promise((resolve,reject) => resolve("task 1 complete"));
// }

// fn1().then(result => setTimeout(() => console.log(result),2000));

// // 2
// function fn2() {
//     return new Promise((resolve,reject) => reject("tesk 2 failed"))
// }

// fn2().then(result => console.log("didnt fail")).catch(result => console.error(result));

// // 3 
// function fn3(){
//     return new Promise((resolve,reject) => resolve(5))
// }

// fn3().then(result => {return result*2}).then(result => {return result*2}).then(result => console.log(result));

// // 4
// function fn4() {
//     return new Promise((resolve,reject) => setTimeout(() => resolve("first"),2000))
// }

// fn4() .then( result => setTimeout( () => { console.log(result); return new Promise(resolve,reject)}, 1000 ) ) .then(result => setTimeout(() => console.log("second"),1000));

// // 5
// function tsk3() {
//     return new Promise((resolve,reject) => setTimeout( () => reject("task3 failed"),2000));
// }

// tsk3().then(result => console.log("task complete")).catch(result => console.log(result));