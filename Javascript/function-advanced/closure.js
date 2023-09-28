function counter() {
    let count = 0

    return function() {
        return ++count
    }
}

// return function of counter is stored in x.
let x = counter()

// the value of count is increased by 1 in each function call
console.log(x())
console.log(x())
console.log(x())

let y = 10

// function whatever uses the variable y from it's outer lexical scope
function whatever() {
    return y
}

console.log(whatever())

y = 11

// as outer lexical scope variable is updated. function call will print the updated value
console.log(whatever());

/**
Closure:
========
In javascript every function is a closure which remembers it's outer variable.
no matter from where the function is called it remembers it's outer variable and
access the current value of the variable. It can remember the outer variable because
everything in javascript is related with lexical environment. lexical environment has 
two parts.

1. Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
2. A reference to the outer lexical environment, the one associated with the outer code.
 */