var name = "moin";

let age = 10;

if (true) {
    let age = 20;
    console.log(age);
}

console.log(age);

if(true) {
  // var isn't block scoped
  var gender = "male";
  console.log(gender);
}

// var isn't block scoped as we declared `gender` inside block but
//can access outside of the block

console.log(gender);

// can't redeclare let variable
// let age = 20;

// hoisting
console.log(isAdmin);

var isAdmin = true;