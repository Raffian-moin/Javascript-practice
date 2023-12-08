// In Javascript an object can inherit property from another object
// every object has an internal [[ prototype ]] object which is by default null
// and means that our object hasn't inherited any object yet.
// we can set [[ prototype ]] value to another object or inherit from another object via __proto__
// __proto__ is the getter and setter for [[ prototype ]]

let animal = {
    movementType: 'walk',
    numberOfLegs: 4,
    move () {
        return this.movementType
    }
}

let rabbit = {
    movementType: "jump"
}

// set [[prototype]] property of rabbit
rabbit.__proto__ = animal

// get [[prototype]] property of rabbit
console.log(rabbit.__proto__);

// if a property is not available in the object then javascript looks
// for that property in inherited object
console.log(rabbit.numberOfLegs)

// "this" inside method always refers to the object before the method
// here this refers to the rabbit object
console.log(rabbit.move())
