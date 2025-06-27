const main = document.querySelector("main");



if (localStorage.getItem("logged") == undefined || localStorage.getItem("logged") == null) {
    main.innerHTML = `
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
    `;
}

console.log(localStorage.getItem("logged"));