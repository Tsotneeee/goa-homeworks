let btn = document.getElementById("clicks"); // clicks button (cookie)
let out = document.getElementById("outs"); // output paragraph
out.innerHTML = `clicks: ${localStorage.getItem("clk")}`; // first before clicked paragraph change
let pluser = 1; // upgrade level
btn.addEventListener("click", func); // clicked cookie
let quickAcc1 = localStorage.getItem("clk"); // times clicked (json)
let qaP = JSON.parse(quickAcc1); // times clicked (parsed)
let reset = document.getElementById("reseter"); // reset button
let upgr1 = true;
let upgr2 = true;


if ( 300 <= qaP && qaP <= 600 && upgr1 ) { // upgrade1
    pluser = 2;
    upgr1 = false;
    alert("you upgraded! ") 
} else if (qaP >= 600 && upgr2) { // upgrade 2
    pluser = 3;
    upgr2 = false;
    alert("you upgraded even more! ");
}

reset.addEventListener("click",() => {localStorage.setItem("clk",0);let results = `clicks: ${localStorage.getItem("clk")}`; // reset button
out.innerHTML = results; });

function func(){
    let lcl = localStorage.getItem("clk");
    localStorage.setItem("clk",JSON.stringify(JSON.parse(lcl)+pluser));
    let results = `clicks: ${localStorage.getItem("clk")}`;
    out.innerHTML = results;

}

