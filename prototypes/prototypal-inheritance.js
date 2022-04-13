let fruit = {
    name: "banana",
    color: "yellow"
}

let animal = {
    eats: true,
    __proto__:fruit
}

console.log(animal.color);

