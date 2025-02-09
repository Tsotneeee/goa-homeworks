let h1 = document.querySelector('h1');


fetch('https://fakestoreapi.com/products/1').then(res => res.json()).then(data => {console.log(data);
    h1.textContent = data.category;
    document.getElementById('title').textContent = data.title;
    document.getElementById('desc').textContent = data.description;
    document.getElementById("img1").src = data.image;
    document.getElementById('price').textContent = data.price;
}).catch(() => console.log('error'));


fetch('https://fakestoreapi.com/products/2').then(res => res.json()).then(data => {console.log(data);
    document.getElementById('title2').textContent = data.title;
    document.getElementById('desc2').textContent = data.description;
    document.getElementById("img2").src = data.image;
    document.getElementById('price2').textContent = data.price;
}).catch(() => console.log('error'));


fetch('https://fakestoreapi.com/products/3').then(res => res.json()).then(data => {console.log(data);
    document.getElementById('title3').textContent = data.title;
    document.getElementById('desc3').textContent = data.description;
    document.getElementById("img3").src = data.image;
    document.getElementById('price3').textContent = data.price;
}).catch(() => console.log('error'));