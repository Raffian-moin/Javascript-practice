"use strict"

// Javascript has three flags for object properties. they are invisible by default
// but we can get and set them
// flags are:
// writable: if true, the value can be changed, otherwise it’s read-only.
// enumerable: if true, then listed in loops, otherwise not listed.
// configurable: if true, the property can be deleted and these attributes can be modified, otherwise not.

let user = {
  name: "John",
  age: 15
};

// get descriptor of a property
let nameDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(nameDescriptor);

// set descriptor of a property
// if property doesn't exist in object it will create the property and assign undefined value to it
// if any flags are missing in defineProperty then it will be by default false
// below we didn't define any flags hence all the flags are false
// writable: false,
// enumerable: false,
// configurable: false
Object.defineProperty(user, "height", {});

let heightDescriptor = Object.getOwnPropertyDescriptor(user, "height");

console.log(heightDescriptor);

// Writable flag
// only throws in strict mode
Object.defineProperty(user, "name", {
    writable: false,
});

// as we made the property non-writable following modification won't work

user.name = 'Moin';
console.log(user.name);

// Enumerable flag
Object.defineProperty(user, "name", {
    enumerable: false,
});

// as we made the property non-enumerable it won't appear in iteration
for (const key in user) {
    console.log(user[key]);
}

// Configurable flag
Object.defineProperty(user, "name", {
    configurable: false,
});

// as we made the property non-configurable we can't update the flags value
// it won't work and throw error
Object.defineProperty(user, "name", {
    enumerable: true,
    writable: true,
});

// as we made the property non-configurable we can't delete property
// it won't work and throw error
// only throws in strict mode
delete user.name
console.log(user)

// NB: We can change writable: true to false for a non-configurable property