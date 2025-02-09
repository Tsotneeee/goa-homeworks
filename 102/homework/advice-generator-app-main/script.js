async function fetcher(){
    try {
    const jsoner = await fetch("https://api.adviceslip.com/advice");
    const untiJson = await jsoner.json();
    let adv = untiJson.slip.advice;
    let aid = untiJson.slip.id;
    document.getElementById("p1").textContent = `advice # ${aid}`;
    document.getElementById("p2").textContent = adv;
    }
    catch {
        console.log("error")
    }
}

const btn = document.getElementById("div1");
fetcher();
btn.addEventListener("click", fetcher)