let data = document.getElementById("p1");
fetch('https://fakestoreapi.com/').then(result => {console.log(result);return result["status"];})
.then(result => data.textContent = `status is: ${result}`)
.catch(result => console.log("no response"));
