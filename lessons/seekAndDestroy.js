function destroyer(arr) {
    // make an array STARTING from the second argument aka [1]
    // recall the format:   arr.slice(startIndex)
    var valsToRemove = Array.from(arguments).slice(1);
  
    // check if val is NOT in valsToRemove; if true to keep the value in the original
    // array or false to remove it.
    // thus when we return the original array, it is the values in the arr that do NOT match the arguments
    return arr.filter(val => !valsToRemove.includes(val));
  }

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

