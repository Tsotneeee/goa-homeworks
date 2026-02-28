let input;
const btn = document.getElementById("btn")

btn.addEventListener('click',()=>{
    input = document.getElementById("inp1").value
})

async function postMeth() {
    const res = await fetch("http://localhost:6967",{
        method: "POST",
        headers:{'content-type':'plain/text'},
        body: {"input":input}
    })
    const data = await res.json()
    console.log(data)
}

postMeth()