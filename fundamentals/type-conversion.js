// Numeric conversion happens in mathematical functions and expressions automatically.
let age = "12"/"2";
console.log(age);

let marks = "123";

let convertToNumber = Number (marks);

console.log(typeof convertToNumber);

let myAge = "my age is 100";

let convertAgeToNumber = Number(myAge);

console.log(typeof convertAgeToNumber);

let isAdmin;

console.log(Number (isAdmin));

//Boolean conversion

//Rule:Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.

let isTalented = '';

console.log(Boolean(isTalented));