let student = {
    name: "moin",
    age : 30,
}

let json = JSON.stringify(student);

console.log(json);
// console.log(JSON.stringify(student));

let age = 1;

console.log(JSON.stringify(age));

let user = {
  name: "moin",
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user));