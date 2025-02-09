let btn = document.getElementById("submit1");

btn.addEventListener("click",mainFunc);

function mainFunc() {
    let names = document.getElementById("name1").value;       
    let lstnames = document.getElementById("lstname1").value;
    let ages = document.getElementById("age1").value;
    let ids = document.getElementById("id1").value;
    let heights = document.getElementById("height1").value;
    let descripts = document.getElementById("discr1").value;
    let emails = document.getElementById("mail1").value;
    // inps
    let nm2 = document.getElementById("name2");
    let lstnm2 = document.getElementById("lstname2");
    let age2 = document.getElementById("age2");
    let ids2 = document.getElementById("id2");
    let hgt2 = document.getElementById("height2");
    let desc2 = document.getElementById("decr2");
    let mail2 = document.getElementById("mail2");
    // done declaring
    nm2.textContent = `Name: ${names}`;
    lstnm2.textContent = `Lastname: ${lstnames}`;
    age2.textContent = `Age: ${ages}`;
    ids2.textContent = `ID: ${ids}`;
    hgt2.textContent = `Height: ${heights}`;
    desc2.textContent = `Description: ${descripts}`;
    mail2.textContent = `Email: ${emails}`;



}