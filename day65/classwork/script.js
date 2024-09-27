document.body.children[0].textContent = "hello world";
// ...


console.dir(document);
// ...

function manualGetElementById(id){
    const elements = document.all;

    for (let i = 0; i < elements.length; i++){
        if (elements[i].id === id){
            return elements[i];
        }
    }
}

console.log(manualGetElementById("mypara"));
// ...

