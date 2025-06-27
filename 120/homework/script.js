set1 = new Set([1, 2, 3]);
set2 = new Set([2,3]);

if (set1.has(...set2)) {
    console.log(true);
} else { console.log(false) }
