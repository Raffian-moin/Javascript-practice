// Accessor properties are actually getter and setter method for property
// we can get and set value for a property. So what is the use case for accessors?
// we can do complex task for the property and set the value for property

const user = {
    name: 'moin',
    birthday: null,

    get age() {
        // do calculation of birthday
        // for simplification let's just return the birthday
        return this.birthday
    },
}

user.birthday = 19;

console.log(user.birthday)

// we could do the above example using object method, but we had to call the
// method and get the value
// but with accessor we can get the value directly as property
// another example could be someone deposited money and we can define a total profit
// get accessor and within that do the maths and return the value

// NB: I didn't use the setters accessor cause it doesn't make sense to set value to 
// a via a method 
// If we need the value of that we are going to be set via set accessor, we can use
// normal property and then do something with that value via get accessor
