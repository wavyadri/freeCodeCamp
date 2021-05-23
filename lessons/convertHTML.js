// Solution #1
// use a switch since there's only a few elements
function convertHTML(str) {
  // Split str into array of characters
  var temp = str.split("");
    // pass each character into the switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  // changes have been made so now turn arr back into str
  temp = temp.join("");
  return temp;
}

// Solution #2 & #3
function convertHTML(str) {
    // create an object with the HTML entities
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Use regex to replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);

    // OR

    //Use map function to return a filtered str with all entities changed automatically.
    return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
  }

  // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.