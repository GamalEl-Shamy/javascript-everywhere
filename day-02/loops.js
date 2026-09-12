// ---------- 4.1–4.5
// 1. for — print 1 to 20, but "Fizz" for every multiple of 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}


// 2. for...of — print 6 track names with their position

const tracks = ["HTML", "CSS", "JavaScript", "Node.js", "Git", "GitHub"];

let position = 1;

for (const track of tracks) {
  console.log(`${position}: ${track}`);
  position++;
}


// 3. for...in — print every key/value pair of an object with 5 keys

const student = {
  name: "Gamal",
  age: 25,
  city: "Kafr El Sheikh",
  language: "JavaScript",
  level: "Beginner",
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}


// 4. while — start at 100 and halve until below 1

let number = 100;

while (number >= 1) {
  console.log(number);
  number /= 2;
}


// 5. do...while — condition false from the start, but run once

let count = 10;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 5);



// ---------- 4.6
const scores = [85, 42, 67, 95, 38, 97, 88, 99];

for (const score of scores) {
  if (score < 50) {
    continue;
  }

  if (score > 95) {
    break;
  }

  console.log(score);
}

// Scores below 50 are skipped with continue
// loop stops at the first score above 95
// Only scores 85, 67, 95  print



// ---------- 4.7
const numbers = [12, 45, 7, 89, 23, 56, 34, 91];

let sum = 0;
let highest = numbers[0];
let lowest = numbers[0];

for (const number of numbers) {
  sum += number;

  if (number > highest) {
    highest = number;
  }

  if (number < lowest) {
    lowest = number;
  }
}

const average = sum / numbers.length;

console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);