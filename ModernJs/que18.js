// Q18 — Scoping & Optional Chaining

// -----------------
// a) Output
// -----------------
if (true) {
  let x = 10;  // block-scoped
  var y = 20;  // function/global-scoped
}

console.log(y); // 20 → var escapes block
// console.log(x); // Error → let is block-scoped


// -----------------
// b) Optional Chaining
// -----------------
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user.details.email);        // normal access
console.log(profile.user.details.phone?.num);   // undefined, no error


// -----------------
// c) Example preventing runtime error
// -----------------
const student = {
  name: "A",
  marks: { math: 90 }
};

// Without ?. → ERROR
// student.marks.science.score

// With ?. → safe
console.log(student.marks.science?.score); // undefined, no crash
