import { capitalize } from "./modules/string.mjs";
import { adder } from "./modules/math.mjs";
import { randoms } from "./modules/random.mjs";
import { classes } from "./modules/class.mjs";
import { arrier } from "./modules/arr.mjs";

console.log(capitalize("hello"));
console.log(adder(8,2));
console.log(randoms());
console.log(classes("tsotne", 15 , "bajelidze"));
console.log(arrier([5,1,9,4,5,5,9,2,2,5]))