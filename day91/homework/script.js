let book1 = document.getElementById("btn1");
let book2 = document.getElementById("btn2");
let book3 = document.getElementById("btn3");
let collectionMap = new Map([
    ["book1_1",["TITLE: The Night Circus","PRICE: 30.99 ₾"]],
    ["book2_2",["TITLE: Circe","PRICE: 20.99₾"]],
    ["book3_3",["TITLE: Project Hail Mary","PRICE: 40.99 ₾"]]
]);
let con1 = true;
book1.addEventListener("click",func1);

book2.addEventListener("click",func2);

book3.addEventListener("click",func3);

function func1(){
    const div1 = document.getElementById("collection4");
    console.log("function ran successfully");
    let p1_1 = document.createElement("p");
    let p1_2 = document.createElement("p");
    p1_1.textContent = collectionMap.get("book1_1")[0];
    p1_2.textContent = collectionMap.get("book1_1")[1];
    div1.style.width = "220px";
    div1.style.height = "130px";
    div1.style.padding = "10px";
    div1.style.borderRadius = "17px";
    div1.style.backgroundColor = "rgb(255, 224, 171)";
    div1.style.boxShadow = "0px 0px 2px rgb(255, 192, 75)"
    div1.style.border = "1px solid rgb(176, 114, 0)";
    div1.appendChild(p1_1);
    div1.appendChild(p1_2);
    book1.remove()
}

function func2(){
    const div1 = document.getElementById("collection5");
    console.log("function ran successfully");
    let p2_1 = document.createElement("p");
    let p2_2 = document.createElement("p");
    p2_1.textContent = collectionMap.get("book2_2")[0];
    p2_2.textContent = collectionMap.get("book2_2")[1];
    div1.style.width = "220px";
    div1.style.height = "130px";
    div1.style.padding = "10px";
    div1.style.borderRadius = "17px";
    div1.style.backgroundColor = "rgb(255, 224, 171)";
    div1.style.boxShadow = "0px 0px 2px rgb(255, 192, 75)"
    div1.style.border = "1px solid rgb(176, 114, 0)";
    div1.appendChild(p2_1);
    div1.appendChild(p2_2);
    book2.remove()
}

function func3(){
    const div1 = document.getElementById("collection6");
    console.log("function ran successfully");
    let p3_1 = document.createElement("p");
    let p3_2 = document.createElement("p");
    p3_1.textContent = collectionMap.get("book3_3")[0];
    p3_2.textContent = collectionMap.get("book3_3")[1];
    div1.style.width = "220px";
    div1.style.height = "130px";
    div1.style.padding = "10px";
    div1.style.borderRadius = "17px";
    div1.style.backgroundColor = "rgb(255, 224, 171)";
    div1.style.boxShadow = "0px 0px 2px rgb(255, 192, 75)"
    div1.style.border = "1px solid rgb(176, 114, 0)";
    div1.appendChild(p3_1);
    div1.appendChild(p3_2);
    book3.remove()
}