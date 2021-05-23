function findLongestWordLength(str) {
    let words = str.split(' ');
    let max = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > max) {
        max = words[i].length;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  // turn str into array excluding the spaces
  // loop through each item in the array and check it's length
  // keep an updated variable with the longest word