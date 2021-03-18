function sentensify(str) {
    // split str into an array (recall \W matches any character)
    // join arr into a str with spaces
    return str.split(/\W/).join(" ");
  }

  // Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. 
  // The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. 
  // For this challenge, do not use the replace method.