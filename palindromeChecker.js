function palindrome(str) {
    // remove all non-alphanumerica aka ^ (not) 0-9 or a-z
    // convert to lower case
    let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // reverse the string
    // reverse() can only be applied to a array
    // first, ...spread, so we don't affect the original array
    // reverse
    // last, join, so the arr is now a str again
    let rvrStr = [...newStr].reverse().join("");
    // check for equality
    return newStr == rvrStr ? true : false;  
  }

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.