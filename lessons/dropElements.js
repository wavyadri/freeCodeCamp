function dropElements(arr, func) {
    // while array is not empty
    // and the first element of the array does not make func true
    // remove the first element off of the array
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.