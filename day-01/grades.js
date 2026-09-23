const students = [
    { name: "Gamal", score: 95 },
    { name: "Mona", score: 88 },
    { name: "Omar", score: 65 },
    { name: "Sara", score: 92 },
    { name: "Lina", score: 91 }
];

let excellentCount = 0;
let goodCount = 0;
let needsWorkCount = 0;

for (const student of students) {
    if (student.score >= 90) {
        console.log(`${student.name}: ${student.score} → Excellent`);
        excellentCount++;
    } else if (student.score >= 70) {
        console.log(`${student.name}: ${student.score} → Good`);
        goodCount++;
    } else {
        console.log(`${student.name}: ${student.score} → Needs work`);
        needsWorkCount++;
    }
}

console.log();
console.log(
    `${excellentCount} Excellent, ${goodCount} Good, ${needsWorkCount} Needs work.`
);