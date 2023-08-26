/*
Object property name can be derived from variable or string literal.
In those case we use [],  it is called computed property.
*/

let name = 'student name';
let age = 'age';

let student = {
    [name]: 'Moin',
}

console.log(student[name])

//property name that is combination of string and variable
student['student ' + age] = 19

// accessing computed property value
console.log(student["student " + age]);

// can also access like this
console.log(student["student age"]);

