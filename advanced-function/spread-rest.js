let numbers = [1,2,3,4];

let numbers2 = [4,5,6];

let merge = [...numbers, ...numbers2];

console.log(merge);
console.log(Math.max(9, ...numbers, ...numbers2));

//copy array and assign to a new array
let newArray = [...numbers];

console.log(newArray);