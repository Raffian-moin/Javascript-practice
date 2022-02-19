// The nullish coalescing operator ?? provides a short way
//  to choose the first “defined” value from a list.
//defined means- not null and not undefined
let girlAge;
let boyAge = 3;

console.log(girlAge ?? boyAge);

let girlMarks = 2;
let boyMarks = 3;

console.log(girlMarks ?? boyMarks);

//Nullish coalescing vs || operator

let height = 0;

console.log(height ?? 100);
console.log(height || 100);

//Nullish coalescing returns the first defined value.here height has value.so it is defined.
// || operator returns the first truthy value.here height has value 0, so it is falsy value.so returns 100
// falsy values : 0,empty,undefined,null
