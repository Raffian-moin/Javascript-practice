let names = ["moin", "raffian"];

console.log(names[1]);
names.push("Imran");

console.log(names);
names.pop();

console.log(names);
names.shift();

console.log(names);
names.unshift("kamal");

console.log(names);
console.log(names.length);

for (let name of names) {
    console.log(name);
}

names[100] = 100

console.log(names.length);

//clearing array

names.length = 0;

console.log(names);

let categories = new Array(2);

console.log(categories);
console.log(categories.length);

//Multidimensional Array

let matrix = [
    [1,2],
    [3,4],
];

console.log(matrix[1][1]);

let numbers = [1,2,3];

console.log(numbers.toString());

