// Q15 - Template Literals & Shorthands

// a) Template Literal
const username = "Sam";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the course: ${course}`);

// b) Shorthand Object Syntax
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

// c) Arrow Function with Implicit Return
const getFullName = (first, last) => `${first} ${last}`;