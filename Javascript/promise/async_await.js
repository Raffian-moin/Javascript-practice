// A function with async means that it is an asynchronous function
// async function always returns a promise
// async function don't need to use resolve().
// If we return something it is considered as resolved
async function f() {
  return 1;
};

// as it returns promise, we can use .then() method with it
f().then((result) => {
    console.log(result);
})

// what if we want do perform asynchronously?
// and we need the result of that asynchronous action
// we have await keyword which waits until promise is resolved
// then works with it's result
async function myFunc() {
    // here we are doing asynchronous operation
    let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(5);
    }, 1000);
    });

    // it waits for promise until it is resolved
    let result = await promise;

    console.log(result);
    // we are returning the result
    return result;
}

// then we are further using it's value as async function always returns promise
myFunc().then((result) => {
    console.log(result)
});

// how do we handle error in async function?
// we can use try...catch for the error handling
async function myAsyncFunc() {
    let promise = new Promise(function (resolve, reject) {
        reject('some error')
    })

    try {
        let result = await promise;
        return result
    } catch (error) {
        console.log(error)
    }
}

myAsyncFunc();

// another way to handle is to use .catch()
async function myAsyncFunc2() {
    return new Promise(function (resolve, reject) {
      reject("again error");
    });
}

myAsyncFunc2().catch((error) => {
    console.log(error);
})