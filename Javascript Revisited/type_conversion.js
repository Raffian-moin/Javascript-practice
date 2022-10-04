// number to string conversion
let name = 10;
console.log(typeof name);

console.log(typeof String(name));

// string to number conversion
let amount = "10";
let localNews = "10 people died from lack of foods";
let food = null;

console.log(amount);
console.log(typeof Number(amount));

// returns NaN because string is not pure number
console.log(Number(localNews));

// returns 0 for null
console.log(Number(food));

// Boolean conversion
let dogCount = 20;
let sum = 0;
console.log(typeof dogCount);
console.log(typeof Boolean(dogCount));
// null, undefined, empty, 0, NaN becomes false, otherwise true
console.log(Boolean(sum));
