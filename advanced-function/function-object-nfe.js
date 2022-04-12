// in javascript functions are object,we can access function properties like object

function sayHi() {
    return `hello`;
}

console.log(sayHi.name);

/*
Explanation: 
in this example we can get function name
via `name` property like it's an object
*/

function add (a,b) {
    return a + b;
}

console.log(add.length);

/*
explanation:
the length property return the number of parameter of a function
*/

/*
==============================
NAMED FUNCTION EXPRESSION
==============================
*/

let greeting = function myfunc() {
    return `hello`;
}

// console.log(greeting());
// console.log(myfunc()); //ERROR

/*

Explanation:
function expressions are those functions that is assigned to a variable
and function expressions do not need a function name,here `myfunc` is the 
function expression name.it is unnecessary function expression.NFE functions
are not visible outside of the function meaning we can't call the function
by it's name outside of the function.see line 37.

*/

let greetGuest = function myfunction(guestName) {
    if (guestName) {
        console.log(`hi ${guestName},you are our guest`);
    } else {
        myfunction("moin");
    }
};

greetGuest();

/*
EXPLANATION:
we can only call NFE inside the function.in this example we called the `myfunction`
inside the function.
*/

/*
=========================
Use Case
=========================
*/

let greetGuest1 = function myfunction(guestName) {
  if (guestName) {
    console.log(`hi ${guestName},you are our guest`);
  } else {
    myfunction("moin");
  }
};

let greetNewGuest = greetGuest1;
greetGuest1 = null;
greetNewGuest();


let greetGuest2 = function myfunction(guestName) {
  if (guestName) {
    console.log(`hi ${guestName},you are our guest`);
  } else {
    greetGuest2("moin");
  }
};

let greetNewGuest2 = greetGuest2;
greetGuest2 = null;
greetNewGuest2();

/*
EXPLANATION:
In the first example we returned `myfunction` from the greetGuest1() function.
`myfunction` is local to the greetGuest1() function.so when we assign greetGuest1() to 
the greetNewGuest variable it actually stored `myfunction`'s value.then we assigned
greetGuest1() = null,so  greetGuest1() becomes null but greetNewGuest = myfunction(),
so it works.

In the second example we returned greetGuest2() from the greetGuest2() function.
so when we assigned greetGuest2() to the greetNewGuest2 variable it actually 
stored the greetGuest2()'s value.then we assigned greetGuest2() = null;
so greetNewGuest2 becomes null and it doesn't work
*/

// we should use NFE in nested function