const name = "Gamal";
const city = "Kafr El Sheikh";
const reason = "to learn";

function createProfile(name, city, reason) {
  return `My name is ${name}, I live in ${city}, and I joined because ${reason}.`;
}


console.log(createProfile(name, city, reason));

console.log(process.version);