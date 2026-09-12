// ------- 3.1
const score = 95;

if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}


// ------- 3.2
const score2 = 75;
const result = score >= 60 ? "pass" : "fail";
console.log(result);

// because they hard to read and maintain


// ------- 3.3
const grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Not bad");
    break;

  case "D":
    console.log(" passed");
    break;

  case "F":
    console.log("You need more practice");
    break;

  default:
    console.log("Invalid grade");
}



// ------- 3.4
const grade2 = 75;
const attendance = 85;

if (grade2 >= 70 && attendance >= 80) {
  console.log("Certificate awarded");
}

if (grade2 < 60 || attendance < 50) {
  console.log("Review needed");
}