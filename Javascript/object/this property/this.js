/*
this property:
--------------
this property refers to the oject from where method is called.

*/

let user = {
    userName: 'moin',
    sayHello () {
        return 'hello! ' + this.userName
    }
}

console.log(user.sayHello());

/*
this is not bound:
-----------------
'this' can be used in any function, even if it’s not a method of an object.
this property refers to the oject from where method is called.
the value of 'this' is evaluate at the run-time
*/

let admin = {
    name: 'raffian'
}

let employee = {
    name: 'Imran'
}

function sayHello () {
    return "hello! " + this.name;
}

admin.sayHello = sayHello;
employee.sayHello = sayHello;

console.log(admin.sayHello());
console.log(employee.sayHello());