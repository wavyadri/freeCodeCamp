//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
  // if str is longer than num
  // truncate string to the length of num
  // return truncated str + ...
  
  // condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.