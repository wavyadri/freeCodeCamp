// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You should not use the built-in filter method.
// The Array instance can be accessed in the myFilter method using this.

