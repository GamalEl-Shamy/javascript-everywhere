// ------ 2.1
const name = "Gamal";
const age = 23;
const isStudent = true;
const city = null;
let job;

const person = {
  name: "Gamal",
  age: 23,
};

const hobbies = ["coding", "reading", "gaming"];

console.log(`name → "${name}" → ${typeof name}`);
console.log(`age → ${age} → ${typeof age}`);
console.log(`isStudent → ${isStudent} → ${typeof isStudent}`);
console.log(`city → ${city} → ${typeof city}`);
console.log(`job → ${job} → ${typeof job}`);
console.log(`person → ${person} → ${typeof person}`);
console.log(`hobbies → ${hobbies} → ${typeof hobbies}`);


// ------ 2.2
console.log(typeof null); // object - because of a historical JavaScript
console.log(typeof []); // object - because arrays are objects in JavaScript
console.log(Array.isArray([]));


// ------ 2.3 
const value1 = Number("42");
console.log(value1); // 42
console.log(typeof value1); // number

const value2 = String(42);
console.log(value2); //"42"
console.log(typeof value2); // string

const value3 = Number("hello");
console.log(value3); // NaN
console.log(typeof value3); // number

console.log(parseInt("42px")); // 42
console.log(Number("42px")); // NaN

console.log(typeof NaN); // number


// ------ 2.4
const values = [
  false,
  0,
  0n,
  '',
  "",
  null,
  undefined,
  NaN,
  [],
  {},
  " ",
  "hello",
];

for (const value of values) {
  console.log(value, " = ", Boolean(value) ? "truthy" : "falsy");
}


// ------ 2.5
const value = 0;

console.log(value || "default"); // "default"
console.log(value ?? "default"); // 0