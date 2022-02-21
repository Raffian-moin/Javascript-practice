let studentInfo = {
    name: "moin",
    marks: {
        bangla:20
    }
}

console.log(studentInfo.name);

let userInfo = studentInfo;

userInfo.name = "karim",

// console.log(userInfo.name);
console.log(studentInfo.name);

//object cloning

let clone = {};

Object.assign(clone, studentInfo); // target object, source object

console.log(clone);