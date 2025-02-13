import { item1 , item2} from './classes.mjs';

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

console.log(item1, item2);
p1.innerHTML = item1.name;
p2.innerHTML = item1.price;
p3.innerHTML = item2.name;
p4.innerHTML = item2.price;