/*
    Javascript has evolved over the year. In earlier version
    of javascript some functionality of language silently failed
    without throwing proper error. This caused the developer to 
    scratch their head finding the error. So Javascript introduced
    "strict mode" to prevent silent fail, better code writing and
    better debugging for the developers.

    N.B. "use strict" is by default used by modules and classes.
        no need to explicity define.
*/

// "use strict"

myVariable = "whatever";

// will throw error because variable is not defined
console.log(myVariable);

myobj = {
    'name': "Moin",
    'language': 'Javascript'
}

// will throw error because Object is not defined
console.log(myobj);

// will throw error because Object deletion is not allowed
delete myobj;
