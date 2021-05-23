function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
    }
    return sumBetween;
}

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

