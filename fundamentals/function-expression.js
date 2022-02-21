"use strict";
let age = function() {
    console.log('hello');
}

age();

//callback

let myFavouriteFlower = function(flower, rightAnswer, wrongAnswer) {
    if (flower === 'tulip') {
        rightAnswer();
    } else{
        wrongAnswer();
    }
}

function rightAnswer() {
    console.log(`this is right answer`);
}

function wrongAnswer() {
  console.log(`this is wrong answer`);
}

myFavouriteFlower("tulip", rightAnswer, wrongAnswer);

//calling function declration before creation

sayHello();

function sayHello() {
    console.log("hi");
}