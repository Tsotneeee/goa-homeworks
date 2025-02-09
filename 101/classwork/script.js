// console.log("action started"); let img = document.getElementById("dogs");
// fetch("https://dog.ceo/api/breeds/image/random").then(res => 
// {if(!res.ok) { throw new Error(`something went wrong, error is ${res.status}`) }return res.json()})
// .then(result =>  {console.log(result);img.src = result.message}) .catch(errorika => console.log(errorika));
let h_1 = document.getElementById("h1");
let img = document.getElementById("dogs");

fetch("https://fakestoreapi.com/products/2").then(res => {if(!res.ok) {
throw new Error(res.status)}return res.json()})
.then(result => {console.log(result);
    
    img.src = result.image;
    h_1.innerHTML = result.title;
})
.catch(err => {
    if (err == "Error: 404") {
        h_1.innerHTML = err;
    } else {
        console.error("unknown error");
    }
});