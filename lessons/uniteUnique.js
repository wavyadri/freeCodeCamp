function uniteUnique(arr) {
    // make a newArr of all the arrays concatonated from the arg
    let newArr = [].concat(...arguments);
    // values will be given an index as they are filters
    // if a repeating value appears, this will result in it already having an index assigned
    // thus it will evaluate to false and not be included in the final filtered array 
    return newArr.filter((val, i, arr) => arr.indexOf(val) == i);
  }

  // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.