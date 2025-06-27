students = [["nigga", "knigga", "snigga"],[2,5,9]];


function adder(studs, scores) {
    mainMap = new Map();
    for (let i = 0; i < studs.length; i++) {
        mainMap.set(studs[i], scores[i]);
    }
    console.log(mainMap);
}

adder(students[0], students[1]);