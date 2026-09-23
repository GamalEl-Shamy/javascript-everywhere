const students = [
    { name: "Sara", score: 92 },
    { name: "Omar", score: 68 },
    { name: "Lina", score: 79 }
];

let passedCount = 0;

for (const student of students) {
    const result = student.score >= 70 ? "PASS" : "FAIL";

    if (result === "PASS") {
        passedCount++;
    }

    console.log(`${student.name}: ${student.score} → ${result}`);
}

console.log();
console.log(`${passedCount} of ${students.length} students passed.`);