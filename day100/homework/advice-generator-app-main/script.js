function fetcher(){
fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(data => {
    const advice = data.slip.advice;
    const id = data.slip.id;
    document.querySelector("#p2").textContent = advice;
    document.querySelector("#p1").textContent = `advice # ${id}`;
})
.catch(err => console.error(err))}

const btn = document.getElementById("div1");
fetcher();
btn.addEventListener("click", fetcher)