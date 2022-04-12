/*
setTimeout() function executes after defined time
time is in milliseconds
*/

/*
==================
setTimeout syntax
==================
setTimeout(here goes the function,time after the function executes,arguments of the function)
example: setTimeout(function(a,b,c...),1000,a,b,c...)
*/

function sayHi(name) {
  console.log(`hello ${name}`);
}

setTimeout(sayHi, 2000, "moin");

setTimeout(() => console.log("hello"), 2000);

/*
N.B: 
don't use () after function name.i.e. sayHi()
because setTimeout expects a reference to a function,not executing the function
*/

/*
================
clearTimeout() 
================

If we ever changed our mind that we don't want to excute the function 
then we should use clearTimeout() function

*/
let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)

/*
==================
setInterval()
setInterval syntax is same as setTimeout but runs repeatedly after the specified tome
==================
*/

let timeId = setInterval(sayHi,2000,"MOIN");

setTimeout(()=> {clearTimeout(timeId), console.log(`stop after 5 seconds`)}, 5000);

/*
In this example we run a function that executes in every 2 seconds
and we can stop the execution with clearTimeout() function,but when 
to stop?how do we tell our code? we tell our code with setTimeout()
function
*/

/*
=============================
Alternative of setInterval()
=============================
we can schedule a repeated work with nested setTimeout() function
*/

// setTimeout(function myFunc() {
//     console.log('ambulance');
//     let timerId = setTimeout(myFunc,2000);
// },2000)

/*
N.B: it is better to use setTimeout() than setInterval()
because it gives us more flexibility
why it is better for clarity see:
https://javascript.info/settimeout-setinterval
(diagram is important)
*/

/*
==========================
Zero Delay setTimeOut()
==========================
*/

setTimeout(() => console.log(`Habib Wahid`));

console.log(`Nancy`);

/*
In zero delay setTimeout() we don't specify the time delay.
so we want to execute the function immediately.so in theory 
should see in the above example Habib Wahid first then Nancy
but we see in reverse.because in zero delay timeout it executes 
the function after the whole script runs.
*/