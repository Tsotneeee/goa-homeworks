let inp1;
let inp2;
let inp3;
const btn = document.querySelector("#doer");
let btn1 = document.querySelector("#doer1");
let btn2 = document.querySelector("#doer2");


btn.addEventListener("click", davaleba1);
btn1.addEventListener("click", davaleba2);
btn2.addEventListener("click", davaleba3);

function davaleba1() {
    inp1 = document.querySelector("#inp1").value;
    let dest = document.querySelector(".d1");
    for (let i = 1; i <= 10; i++) {
        dest.innerHTML += `<p>${inp1} * ${i} = ${inp1*i}</p>`
    }
}

function davaleba2() {
    inp2 = document.querySelector("#inp2").value;
    let num = Math.floor(Math.random() * 20) + 1;
    console.log(num);
    if (inp2 == num) {
        alert("success")
    }
    else {
        if (inp2 < num) {
            if ((num - inp2) > 10) {
                alert("high dif");

            } else {
                alert("low dif");
            }
        } else if (inp2 > num) {
            if ((inp2 - num) > 10) {
                alert("high dif");
            } else {
                alert("low dif");
            }
        }

    }
}

function davaleba3() {
    inp3 = document.querySelector("#inp3").value;
    let dest1 = document.querySelector("ul");
    dest1.innerHTML += `<li>${inp3}</li>`;

}