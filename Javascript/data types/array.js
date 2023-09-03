/*
Array:
------
when we need collection of items and don't need other information
we use array. like fruits name collection, we only need fruits name nothing else.
but if we need taste, color etc. we may need an object.
*/

/*
Array declaration:
------------------
1st way:
--------
array = []

2nd way:
--------
array = new Array()
*/

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];


/*
Retrieve array element:
=======================
1. array.at(index)
2. array[index]
*/

console.log(arr1.at(1));
console.log(arr1[1]);
// retrieve array elements from end
console.log(arr1.at(-1));

// update array element
arr1[1] = 6;

/*
Add and remove elements in/from array:
======================================
Add:
----
1. array.push() ---> add elements to the last+1 index
2. array.unshift() ---> add elements at the first index and shifts the existing elements to the right

Remove:
-------
1. array.pop() ---> removes last element 
2. array.shift() ---> removes first element

*/

arr1.push(0)
console.log(arr1);
arr1.pop()
console.log(arr1);

arr1.shift()
console.log(arr1);
arr1.unshift('hello')
console.log(arr1);

/*
Understanding array length:
===========================
array.length returns maximum integer index+1
it doesn't return the actual array size.
*/
arr1[10] = 10
console.log(arr1);
console.log(arr1.length);
arr1.length = 3
console.log(arr1);

// iterate array elements
for (const item of arr1) {
    console.log(item);
}

// '+' sign concatenates two arrays as if they are strings and returns a string
console.log(arr1 + arr2);
console.log(typeof (arr1 + arr2));