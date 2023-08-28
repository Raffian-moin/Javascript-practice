/*
Constructor:
------------
constructor functions are usually used to make or return
an object. function name starts with capital letter.
and function is called with new functionName().

*/

function User(name) {
    this.name = name
}

let user1 = new User("moin")
let user2 = new User("raffian");

console.log(user1);
console.log(user2);

console.log(user1.name);
console.log(user2.name);

/*

use case:
---------
when we want to make many same structured objects we may use constructor.

*/