
const password = 123456;


let num = 0;
while (num <= 3){
    if (prompt("enter password") == password){
        alert("confirmed")
    } else {
        alert(3 - num + "tries left")
    }
    num++
}
