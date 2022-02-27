let map = new Map();

map.set('1',"moin");

console.log(map.get('1'));

let name = {
    1: 'moin'
}

let nameMap = new Map();

nameMap.set('name-key',name);

console.log(nameMap.get('name-key'));

let flowers = new Map();

flowers.set('1', "tulip").set('2', 'rose');

console.log(flowers);

let recipeMap = new Map([
    ['cucumber',100],
    ['apple',100],
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(`there are ${entry[1]} ${entry[0]} in my kitchen`);
}

let set = new Set();

console.log(set.add('moin'));
console.log(set.add('rahman'));
console.log(set.add('rahman'));
console.log(set);

for (let name of set) {
    console.log(name);
}
// console.log(set.values());