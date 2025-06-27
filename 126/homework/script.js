const website = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector("#btn");
let img = document.querySelector("#dog-image");

async function getDogImage() {
    let res = await fetch(website);
    if (!res.ok) {
        throw new Error("error");
    }
    let data = await res.json();
    img.src = data.message;
}

console.log(getDogImage());

btn.addEventListener("click", getDogImage);