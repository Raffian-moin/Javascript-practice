let person = {
    name: 'moin',
    age: 25,
}

console.log(person.name);

let name = 'userName';

let userInfo = {
    [name]: "moin",
}

console.log(userInfo[name]);

let bookInfo = {
    name: 'intro to computer',
}

console.log("name" in bookInfo);

for(let key in bookInfo) {
    console.log(bookInfo[key]);
}

//shorthand

let playerName = "Ronaldo";
let position = "wing";

let playerinfo = {
    playerName,
    position
}

console.log(playerinfo.playerName);
console.log("=====================");

// numbered keys are returned on ordered
let countries = {
    1: "Bangladesh",
    3: "Japan",
    2: "China",
}

for (let key in countries) {
    console.log(countries[key]);
}