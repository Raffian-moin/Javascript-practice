let user = {
    address:{
        street: '12 street'
    }
}

console.log(user?.address?.street);
console.log("================");

// reading a property that doesn't exist wont cause error
let admin = {
    name: "moin",
}

console.log(admin ?. address ?. street);