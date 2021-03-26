function steamrollArray(arr) {
    // first flatten
    const flat = [].concat(...arr);
    // .some() checks if there is any occurrance of an array still
    // Array.isArray returns true if there is an array
    // if true, recursion
    // we call the function again with arg flat (else, array is already flattened and we return flat)
    // thus flattening another level
    // continue until Array.isArray is false, thus no more arrays and fully flattened
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }

// Flatten a nested array. You must account for varying levels of nesting.

