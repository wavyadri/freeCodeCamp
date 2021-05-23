function sumFibs(num) {
    // Perform check for the validity of the input
    if (num <= 0) return 0;
  
    // Create an array of fib numbers up until num
    const arrFib = [1, 1];

    // declare variable
    let nextFib = 0;
  
    // We unshift the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    // create an arr of Fib numbers up to and including num
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // filter arr to get the odd numbers then reduce to get their sum
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }

  //Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.