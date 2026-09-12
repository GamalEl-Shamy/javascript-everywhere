const name = "Gamal";
let age = 25;

console.log(name);
console.log(age);

name = "Ahmed";

//--------------------------------------------

const student = {
  name: "Gamal",
  age: 23,
  isStudent: true,
  favoriteLanguage: "JavaScript",
};

console.log(student);
console.log(student.favoriteLanguage);

//--------------------------------------------

let score = 95;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

//--------------------------------------------

const tracks = ["Frontend", "Backend", "SQL", "JavaScript", "Node"];

for (const track of tracks) {
  if (track.length > 6) {
    console.log(track);
  }
}

//--------------------------------------------
