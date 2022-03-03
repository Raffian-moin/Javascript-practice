function getPower(x, n) {
    result = 1;
    for (let y = 1; y<=3; y++) {
        result = result * x;
    }
    console.log(result);
}

getPower(2,3);


function pow(x, n) {
  if (n == 1) {
    console.log(x, 'ok');
    return x;
  } else {
    result = x * pow(x, n - 1);
    // console.log(x * pow(x, n - 1));
    return (x * pow(x, n - 1));
  }
}
 pow(2, 3); // 8

function factorial(n) {
    if (n==0){
        return 1;
    } else {
        result = ( n * factorial(n-1 ) );
        console.log(result);
        console.log(
          `Result of ${n} * factorial(${(n-1)}) = ${result}. Returning ${result}`
        );
        return result;
        // return n * factorial(n - 1);
    }
}

console.log(factorial(5));

