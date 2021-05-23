function spinalCase(str) {
    // convert str to arr by splitting by spaces, underscores, or follwed by capital
    // join array into str with "-"
    // make the string lower case
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
  }