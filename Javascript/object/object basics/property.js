/*
Property shorthand:
-------------------
If object property name and value is read from the same variable then
we can use the variable only once.
i.e. {userName}

but not like this:
{
    userName: userName
}

*/

let userName = "moin";
let age = 27;

let user = {
    userName,
    age,
}

console.log(user.userName)
console.log(user.age)

/*
Property Existence:
-------------------
to check if a property exists in the object
we use 'in' operator.

syntax:
"key" in object

*/

console.log('school' in user)


/*
Iterate Object:
---------------
to iterate object we use for...in operator

syntax:
for(let key in object)

*/

for (let key in user) {
    console.log(user[key])
}