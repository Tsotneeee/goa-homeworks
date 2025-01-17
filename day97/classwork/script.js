let btn = document.getElementById("sbm");

if (localStorage.getItem("1") == undefined) {
    btn.addEventListener("click", f1);
    document.getElementById("div3").remove();
} else {
    f2()
}

function f1() {
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;

    localStorage.setItem("1",inp1);
    localStorage.setItem("2",inp2);
    localStorage.setItem("3",inp3);
    localStorage.setItem("4",inp4);
    console.log(localStorage.getItem("1"));
}

function f2() {
    document.getElementById("div2").remove();
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");

    p1.innerHTML = localStorage.getItem("1");
    p2.innerHTML = localStorage.getItem("2");
    p3.innerHTML = localStorage.getItem("3");
    p4.innerHTML = localStorage.getItem("4");
}

// localStorage.clear()