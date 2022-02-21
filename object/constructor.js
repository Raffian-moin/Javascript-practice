function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("moin");

console.log(user.name);
console.log(user.isAdmin);
console.log("=============");

// primitive ignored
function Test() {
    this.exam = "english";
    return "hello"; 
}

let test = new Test();

console.log(test.exam);