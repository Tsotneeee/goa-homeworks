// 1
let m1 = new Map();

m1.set("Georgia","Tbilisi");
m1.set("Ukraine","Kiev");
m1.set("Japan","Tokyo");

// 2
console.log(m1.has("Georgia"));

// 3
let students = new Map([
    ["student1", 10],
    ["student2", 9],
    ["student3", 4],
    ["student4", 7]
]);

for (let i of students.values()) {
    console.log(i)
}

// 4
for (let i of students.keys()) {
    console.log(i)
}

// 5
m1.delete("Ukraine");
console.log(m1);

// 6
students.set("student5",6);
console.log(students.size);



// 7
let mapObj = new Map([["it1",15],["it2",5]]);

mapObj.set("it2",6);

// 8

if ( mapObj.size === 0 ) {
    console.log("empty map")
} else {
    console.log("map contains elements")
}