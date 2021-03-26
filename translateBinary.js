function binaryAgent(str) {
    // create an empty string to store our answer
    var binString = '';
    // split str into array
    // use map so we apply function to every element of array
    str.split(' ').map(function(bin) {
        // parseInt first, taking binary and turning it into a number
        // use 2 because binary is 2-based
        // turn number into char
        // add to empty string
        binString += String.fromCharCode(parseInt(bin, 2));
      });
    return binString;
    }

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.