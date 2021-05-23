function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      newArray.splice(n, 0, arr1[i]); // (position, do not delete, items to add)
      n++;
    }
    return newArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 1) slice to make a copy
// 2) splice to insert at n

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

