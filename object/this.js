let employeeInfo = {
    name: "moin",
    salary() {
        console.log(`${this.name}'s salary is 100k`);
    }
}

employeeInfo.salary();

// this works in the context where it is working

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//arrow function has no this property.It takes this from outer method.

let countryInfo = {
    name : "Bangladesh",
    people() {
        let x = () => console.log(this.name);
        x();
    }
} 

countryInfo.people();