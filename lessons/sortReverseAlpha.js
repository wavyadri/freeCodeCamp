function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a,b) {
      return a===b ? 0 : a < b ? -1 : 1;
    });
  
    // Only change code above this line
  }

  // Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

