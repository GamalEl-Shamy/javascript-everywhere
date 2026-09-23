// ==================== Variables ====================
let name = "Gamal";
const age = 25;

console.log(name);
console.log(age);
// Reassigning const on purpose
// age = 26; //-- TypeError: Assignment to constant variable. 

// ==================== Data Types ====================
const student = {
    name: "Gamal",
    age: 25,
    isStudent: true,
    favoriteLanguage: "JavaScript"
};

console.log(student.name);
console.log(student.age);
console.log(student.isStudent);
console.log(student.favoriteLanguage);

// ==================== Conditionals ====================
let score = 95;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

score = 50;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// ==================== Loops ====================
const tracks = [
    "JavaScript",
    "Node.js",
    "Angular",
    "TypeScript",
    "MongoDB",
    "Express"
];

for (const track of tracks) {
    if (track.length > 6) {
        console.log(track);
    }
}