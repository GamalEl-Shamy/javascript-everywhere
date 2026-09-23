// Create profile.js and run it with node profile.js.

// Stores my name, my city, and why I joined in variables
const name = "Gamal Elshamy";
const city = "Kafr El-Sheikh";
const reason = "to learn Node.js";

// Has a function that takes those values and returns one formatted sentence
function profile(name, city, reason) {
    return `My name is ${name}, I live in ${city}, and I joined because I want ${reason}`
}

// Prints that sentence with console.log
console.log(profile(name, city, reason));

// Also prints the Node version using process.version
console.log(process.version);