// 1.question
let num = 5;

if (num > 0) {
  console.log("Positive number");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Negative number");
}
// 2.question
let number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
// 3.question
let age = 17;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
// 4.question
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
// 5.question
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
// 6.question
let x = -3;

let result = (x < 0) ? "Negative number" : "Not negative";
console.log(result);