function myReplace(str, before, after) {
    // Check if before[0] is a capital
    if (/^[A-Z]/.test(before)) { // test() will return boolean
        // if true, change after[0] to uppercase, adding the rest of the word in lower case
      after = after[0].toUpperCase() + after.substring(1)
    } else {
        // if false, change it to lower case (since we want after to match the case of before)
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with correct case
    return str.replace(before, after);
  }

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

