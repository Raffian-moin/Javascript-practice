var age = 10
// can be re-declared
var age = 12

console.log(age)

var isChild = true

if (true) {
    // block scope variable will change the global variable
    var isChild = false
}

// can access block scope variable
console.log(isChild)


function sayName() {
    var name = 'moin'
    console.log(name)
}

sayName()

// can't access function scope variable
console.log(name)

/**
Var:
====
1. var is not block scoped. it is only function scoped. meaning if we declare a variable 
inside a if condition or for loop then the variable can be accessed from outside the block.

2. var variable can be re-declared. if a variable is declared with var then same variable can
be declared with var without causing any error.

3. var is function scoped. if a variable is declared inside with var then it can not
be accessed outside of function.

 */