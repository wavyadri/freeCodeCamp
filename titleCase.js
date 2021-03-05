function titleCase(str) {

    let regex = new RegEx(/^/)
    if (str[i] == regex){
      str[i].toUpper();
    } else {
      str[i].toLower();
    }
    return str;
  }
  
  titleCase("I'm a little tea pot");
  
  // turn str into an array 
  // select first letter of each word using regex
  // if (^ + letter) || (space + letter)
  // toUpper selected letter
  // else toLower