// collecting the remaining elements with rest operator
function sum(a, b, ...rest) {
    return a + b + rest[0] + rest[1] + rest[2]
}

let ans = sum(1, 2, 3, 4, 5)
console.log(ans)


let user = {
    name: "moin"
}

// copying and merging object with spread operator
user = {
    ...user,
    age: 12,
    role: 'Admin'
}

console.log(user)

// collecting rest of the operator from the object
const {name, ...rest} = user
console.log(rest.age)

/*
parameter will assign value to matching object parameter. those which are not 
mentioned will be into the rest parameter. no matter what the order is.
*/
const {role, ...restInfo} = user
console.log(restInfo)


let arr = [1, 2, 3, 4, 5]
// spreading the elements in individual items
console.log(...arr)
console.log(Math.max(...arr))

let ans2 = sum(...arr);
console.log(ans);

/**
Rest:
=====
Rest operator is used to collect the remaining parameters. it stores the remaining
parameters in array. Rest operator must be the last parameter.

Spread:
=======
Spread operator is used to make an iterable elements into individual elements.
 */