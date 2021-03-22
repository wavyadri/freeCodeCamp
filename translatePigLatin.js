function translatePigLatin(str) {
    return str
      // if first letter is a vowel, add "way" to end
      .replace(/^[aeiou]\w*/, "$&way")
      // if first letter is cons, all starting cons get matched by the regex and they become $1
      // thus, the following part of the word becomes $2
      // when we want to replace, when then switch them and add ay to the end
      // giving us $2$1ay
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }

  // Other Solution

function translatePigLatin(str) {
    // regex to match longest possible starter string of cons
    let consonantRegex = /^[^aeiou]+/;
    // save the match in a variable
    let myConsonants = str.match(consonantRegex);
    // if there is actually a match (aka the match is not null aka there is no match)
    return myConsonants !== null
    ? str
        // replace the cons string with blank (aka removing it)
        // this will leave the proceeding characters (which would start with a vowel)
        .replace(consonantRegex, "")
        // add back the cons string
        // now it has a vowel start
        .concat(myConsonants)
        // add ending ay
        .concat("ay")
    // else, if the str actually started with a vowel, we just need to add way to the end
    : str.concat("way");
}

  //Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

//The rules are as follows:
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.

