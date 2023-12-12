// Promise has two arguments: resolve and reject
// we call resolve() when our operation inside promise was successful
// we call reject() when our operation inside promise was unsuccessful
let promise = new Promise(function (resolve, reject)  {
    console.log('promise');
    // we can't call both resolve() and reject() inside promise
    // resolve("promise resolved");
    reject("promise rejected");
})

// what do we do with our result that was produced by code inside promise
// we work with that result using .then()
// then can take two methods. if it was resolve(), then first function is executed
// if it was rejected(), then second function is executed
promise.then(
  // this is executed in case of resolve()
  function (result) {
    console.log(result);
  },

  // this is executed in case of rejected()
  function (result) {
    console.log(result);
  }
);

// we don't have to execute both function for resolve() and rejected() inside .then()
// we can only execute function for resolve() withing .then()
// and execute function for rejected() within .catch()
promise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}).finally(() => {
    console.log("finally is executed no matter what");
})
