// 1
let name1 = "Luka";

function proccesor(callback,name2) {
    setTimeout(() => {console.log("Loading . . .");callback(name2)},500)
}

function displayer(nm) {
    setTimeout(() => console.log(`welcome '${nm}'`),2000)
}

function callback() {displayer(name1)}

proccesor(callback,name1);