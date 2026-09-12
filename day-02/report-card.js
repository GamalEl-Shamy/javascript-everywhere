// ---------------- 5.1
const students = [
  { name: "Gamal", score: 92, attendance: 95 },
  { name: "Omar", score: 68, attendance: 75 },
  { name: "Osama", score: 79, attendance: 88 },
  { name: "Ahmed", score: 85, attendance: 91 },
  { name: "Mona", score: 55, attendance: 45 },
  { name: "Youssef", score: 97, attendance: 98 },
  { name: "Nour", score: 73, attendance: 82 },
  { name: "Khaled", score: 40, attendance: 60 },
  { name: "Aya", score: 150, attendance: 90 },
];

let skipped = 0;

for (const student of students) {
  if (
    student.score < 0 ||
    student.score > 100 ||
    student.attendance < 0 ||
    student.attendance > 100
  ) {
    skipped++;
    continue;
  }

  let grade;

  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80) {
    grade = "B";
  } else if (student.score >= 70) {
    grade = "C";
  } else if (student.score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  const status =
    student.score < 60 || student.attendance < 70
      ? "At risk"
      : "OK";

  console.log(
    `${student.name.padEnd(10)} ${String(student.score).padEnd(6)} ${String(
      student.attendance + "%"
    ).padEnd(10)} ${grade.padEnd(6)} ${status}`
  );
}

console.log(`Skipped invalid records: ${skipped}`);


// ---------------- 5.2
const bandCounts = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
};

let totalScore = 0;
let validStudents = 0;
let atRiskCount = 0;

let highestStudent = null;
let lowestStudent = null;

for (const student of students) {
  if (
    student.score < 0 ||
    student.score > 100 ||
    student.attendance < 0 ||
    student.attendance > 100
  ) {
    continue;
  }

  validStudents++;
  totalScore += student.score;

  let grade;

  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80) {
    grade = "B";
  } else if (student.score >= 70) {
    grade = "C";
  } else if (student.score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  bandCounts[grade]++;

  if (student.score < 60 || student.attendance < 70) {
    atRiskCount++;
  }

  if (highestStudent === null || student.score > highestStudent.score) {
    highestStudent = student;
  }

  if (lowestStudent === null || student.score < lowestStudent.score) {
    lowestStudent = student;
  }
}

const average = totalScore / validStudents;

console.log("--------");
console.log("Summary");
console.log(`A: ${bandCounts.A}`);
console.log(`B: ${bandCounts.B}`);
console.log(`C: ${bandCounts.C}`);
console.log(`D: ${bandCounts.D}`);
console.log(`F: ${bandCounts.F}`);
console.log(`Class average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestStudent.name}`);
console.log(`Lowest: ${lowestStudent.name}`);
console.log(`At risk: ${atRiskCount}`);
console.log(`Skipped invalid: ${students.length - validStudents}`);




// ---------------- 5.3
console.log("Student Report");
console.log("---------------------------------------------");

console.log(
  `${"Name".padEnd(10)} ${"Score".padEnd(7)} ${"Attendance".padEnd(
    12
  )} ${"Grade".padEnd(7)} Status`
);

console.log("---------------------------------------------");

console.log(
  `${student.name.padEnd(10)} ${String(student.score).padEnd(
    7
  )} ${String(`${student.attendance}%`).padEnd(12)} ${grade.padEnd(
    7
  )} ${status}`
);