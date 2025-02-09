let data;
fetch('http://fakestoreapi.com/products/1').then(result => result.json()).then(result => {data = result;return result})
.then(result => console.log(result)).catch(result => console.log("couldn't fetch")).finally(res => console.log("task finished"));

setTimeout(()=>console.log(data),4000);