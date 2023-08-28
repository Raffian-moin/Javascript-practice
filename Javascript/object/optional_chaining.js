/*
optional chaining:
------------------
in object when we try to read value of an non-existent key, it gives us undefined.
further when we try to read value of that undefined key it gives us error.
to avoid this we use optional chaining.

syntax:
-------
object.property.non-existent-property?.property

if the property before the (?) is not exist, then javascript wont
run the further code thus avoiding error. 

*/

let user = {
  name: "moin",
};

// returns undefined
console.log(user.address)

// throws error; as we try to read property from undefined "address"
console.log(user.address.street)

// returns undefined.
console.log(user.address?.street)


/*

use case:
---------
when a property name may not have value or may not exist,
we use ? after that property name

*/




