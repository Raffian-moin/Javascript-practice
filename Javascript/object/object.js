/*

Object:
--------

Object is a Javascript data type.
Object can store data in key-value(property) pairs.

*/

/*
Create Object:
--------------

there are two ways an object can be created

*/

let object1 = new Object();
let object2 = {}; // declaring an object with {} is called object literal

console.log(typeof object1);
console.log(typeof object2);


/*
Create Object with property:
----------------------------
*/

let student = {
    'name': 'Raffian Moin',
}

/*
Accessing property value:
-------------------------
*/

console.log(student.name);

/*
Modifying property value:
-------------------------
*/

student.name = 'Johnson';

console.log(student.name);


/*
Set property:
-------------
*/

student.age = 26

console.log(student.age);

/*
Delete property:
----------------
*/

delete student.age;

console.log(student);




