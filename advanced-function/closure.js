// A closure function is function that preserves the outer scope in it's inner scope


function greeting() {
    let name = "moin";

    return function sayHi() {
        return `hi ${name}`
    }
}

let hi = greeting();

console.log(hi());

/*
Explanation: in this example name variable is in outer scope for sayHi() function.
greeting function returns sayHi() function and preserve this function in hi variable
In Javascript a variable is destroyed after running a function or whatever.so in this 
case as greeting() is executed name function should have destroyed.but when we run 
hi() it remembers the name variable.this is closure,closure remembers it's outer scope
*/