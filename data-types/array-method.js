//concate
let arr = [1, 2, 3];

let arr2 = [3,4];

// create an array from: arr and [3,4]
console.log(arr.concat(1,2)); // 1,2,3,4
console.log(typeof arr);
console.log("=======================");

// array iterate
arr.forEach(function(item, index, array) {
    console.log(item*2);
});

console.log("=============================");

console.log(arr.indexOf(3));
console.log(arr.includes(3));

let userInfo = [
    {id:1, name: "moin"}, 
    {id:2, name: "raffian"}, 
];

let info = userInfo.find(item => item.id == 1 );

let results = userInfo.filter((item) => item.id < 3);
let multiplication = arr.map((item) => item*3);

console.log(info);
console.log(results);
console.log(multiplication);

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((sum, current) => sum + current, 0);

console.log(sum); 
console.log("=======================================");

console.log(Array.isArray(numbers));