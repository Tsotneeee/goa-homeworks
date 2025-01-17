let btns = document.getElementById("btn");
let btn2 = document.getElementById("btn2")
let html1 = document.getElementsByTagName("html");
let html2 = document.getElementById("hmtl")
let div1 = document.getElementById("nameless");
let div2 = document.getElementById("mainpg");
function styler(itm) {
    itm.style.margin = "20px 100px";
    itm.style.height = "200px";
}

if (localStorage.getItem("col") != null){
    html2.style.backgroundColor = localStorage.getItem("col")
}

btns.addEventListener("click",mainfunc);
btn2.addEventListener("click",() => {
    let color1 = document.getElementById("colors").value;
    console.log(color1);
    html2.style.backgroundColor = color1; 
    localStorage.setItem("col",color1);
})

function mainfunc() { // mainfunc   
    localStorage.setItem("names",document.getElementById("name1").value);
    console.log(localStorage.getItem("names"));
    setTimeout(() => location.reload(),200)
}

if (localStorage.length == 0) {
    styler(div1);
    
} else {
    styler(div2)
}

// forme 
console.log(localStorage.getItem("names"))
console.log(localStorage.length)
// localStorage.clear()