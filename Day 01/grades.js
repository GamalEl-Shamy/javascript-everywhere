const students = [
  { name: "Gamal", score: 95 },
  { name: "Mona", score: 88 },
  { name: "Omar", score: 76 },
  { name: "Sara", score: 65 },
  { name: "Lina", score: 92 },
];

let excellent = 0;
let good = 0;
let needsWork = 0;


for (const student of students) {
  let band;

  if (student.score >= 90) {
    band = "Excellent";
    excellent++;
  } else if (student.score >= 70) {
    band = "Good";
    good++;
  } else {
    band = "Needs work";
    needsWork++;
  }

  console.log(`${student.name}: ${student.score} → ${band}`);
}

console.log(
  `${excellent} Excellent, ${good} Good, ${needsWork} Needs work`
);