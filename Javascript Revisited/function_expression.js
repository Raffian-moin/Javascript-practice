let greet = function(){
    console.log('Namaste');
};

greet();

// Note that, function expression ends with semicolon, it is optional, but recommended.

// function expression is creation when the execution pointer comes to the expression. so 
// we can't call function expression before it is written
// function declaration is created when the script is ready. it makes the function global
// it is called hoisting. so we can call the function declaration before it is written in code