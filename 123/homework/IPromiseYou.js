function f1() {
    return new Promise((resolve, reject) => 
    setTimeout(() => reject("you suck at coding so 'task 3 failed'"),2000));
}

f1().then(res => console.log(res)).catch(err => console.log(err));