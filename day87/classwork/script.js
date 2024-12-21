const students = new Map([
    ["group1" , "Saba"],
    ["group2", "Tsotne"],
    ["group3", "Akaki"],
    ["group4", "Sandro"],
    ["group5", "Andria"]
]);

console.log(students.size);

for ( let [keys,values] of students) {
    console.log(`${values} is the best student in ${keys}`)
}