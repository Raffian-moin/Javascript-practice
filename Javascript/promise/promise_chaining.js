let promise = new Promise(function (resolve, reject) {
    resolve(1)
})

// in this example first .then() waits for result of promise
// second .then() waits for previous one and pass result to 
// subsequent ones
promise.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
})

// but what if we have asynchronous calls that depends on the result of 
// the previous promise?
// we can't use the previous example for asynchronous calls
// we need to return promise in every step
promise.then((result) => {
    console.log(result);
    // returning promise for asynchronous call
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
           resolve(result * 2);
        }, 1000);
    })
}).then((result) => {
  console.log(result);
    // returning promise for asynchronous call
    return new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(result * 2);
    }, 1000);
    });
}).then((result) => {
    console.log(result);
});