/*
arrow function has no this:
---------------------------
arrow function has no this function bind with it.
arrow function use this from its outer normal function.

*/

// it will cause error because the outer normal function can't reach this.name
// as there is no name property in the object
let user = {
    greet () {
        return sayHello = () => {
          return "Hello " + this.name;
        };
    } 
}

// it will work fine
let greet1 = user.greet()
console.log(greet1())

let admin = {
  name: 'moin',
  greet() {
    return (sayHello = () => {
      return "Hello " + this.name;
    });
  },
};

let greet2 = admin.greet();
console.log(greet2());