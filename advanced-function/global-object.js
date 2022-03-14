// as I know window is the global object for browser
// global is the global object for nodeJs
// globalThis is global object for all environment is.meaning it can act as global object 
// for both browser and nodejs

//If a value is so important that you’d like to make it available globally, write it directly as a property:

globalThis.name = {
    name:"moin",
}

//then access from any place or file

console.log(globalThis.name);

//when we declare a variable with var it becomes global object's property

var age = 10;

// we can access `age variable` from global object like this:
console.log(window.age); // 10