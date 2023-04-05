//?1 User input: 120
// Program output:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

//?2 User input: 5
// Program output:
// 0, 1, 1, 2, 3, 5

//?3 User input: 10
// Program output:
// 0, 1, 1, 2, 3, 5, 8

//! Ans in First way

const prompt = require("prompt-sync")();

let num = prompt("Please enter your input: ");
let a = 0;
let b = 1;
let c = 0;
let d = [];

while (c <= num) {
  d.push(c);
  a = b;
  b = c;
  c = a + b;
}
let e = d.join(", ");
console.log(e);
