let btn = document.getElementById("sbmt");

if (localStorage.getItem("cola") != null) {
    document.getElementById("well").style.backgroundColor = localStorage.getItem("cola");
}

btn.addEventListener("click",()=>{
    let colar = document.getElementById("inp").value;
    console.log(colar);
    document.getElementById("well").style.backgroundColor = colar;
    localStorage.setItem("cola",colar)
});