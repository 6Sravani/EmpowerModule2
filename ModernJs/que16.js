// Q16 — Arrow Functions & Ternary Operator

// -----------------
// a) isEven(n)
// -----------------
const isEven = n => n % 2 === 0;
console.log(isEven(4)); // true


// -----------------
// b) Ternary rewrite
// -----------------
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);


// -----------------
// c) greet(name) using ternary
// -----------------
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Sravani"); 
greet(); // Guest
