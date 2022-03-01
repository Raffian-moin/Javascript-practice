let arr = ["moin", "raffian", "unwanted", "unwanted2"];

let [firstName, secondName, ...rest] = arr;

console.log(firstName, secondName, rest);

//object destructuring

let myObj = {
    name: "moin",
    width: 100,
    height: 100,
    weight: 100,
}

// let { name, width } = myObj;

// console.log(name);

//order doesn't matter as variable name should always be matched with property

let { width, name, ...height } = myObj;

console.log(width, height);

let newObj = myObj;

let { width: w, name: n} = newObj;

console.log(w);

