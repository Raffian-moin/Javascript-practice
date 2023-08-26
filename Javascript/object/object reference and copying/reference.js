/* 
Object Reference:
-----------------
When we create an object with a variable we store the 
memory location (object reference) of the object in the variable.
so when we access object's property as objectName.objectPropertyName, we 
actually access the property from the object reference
*/

let user = {
    userName: 'moin',
}

let admin = user

console.log(user)
console.log(admin)

admin.userName = 'raffian'

console.log(user);
console.log(admin);

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
admin = null
console.log(user, 'user variable is not null');
console.log(admin);

/*

Explanation:
------------
as we just copied the memory reference, when we set admin to null 
we just nullified the reference of admin. 
user reference of the object is still there.
so object still exists.

*/ 

/*

Object comparison:
------------------
while comparing two objects they are equal if and only if they
refer to the same object. in other words their object reference is same.

*/

console.log(admin===user)

let a = {};
let b = a;

console.log(a===b)

/*
Const objects can be modified:
------------------------------
If we declare an object with const, we can't modify the object as a whole.
when we try to modify object as a whole we change the reference address of the
object. so it's not possible.
but we can change the property of object
*/

const fruits = {
    name: "apple"
}

fruits.name = 'mango'
console.log(fruits.name);

// throws error because we try to modify the whole object
fruits = {}
console.log(fruits);