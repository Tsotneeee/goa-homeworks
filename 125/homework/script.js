const main = document.createElement("main");

async function stop() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(data[i]);
        main.innerHTML += `
            <div class=cards>
                <h2>${data[i].title}</h2><br>
                <img src="${data[i].image}" alt="product">
                <h4>${data[i].category}</h4>
                <p>${data[i].description}</p>
                <p class=price>Price: ${data[i].price}₾</p><br>
                <button>Add to cart</button>
            </div>
        `
    }
}

stop();
document.body.appendChild(main);