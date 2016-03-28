



var bike = function(year, make, color) {
  this.year = year,
  this.make = make,
  this.color = color,
  this.sentence = function() {
    sentence = "The bike is a " + this.year + " " + this.color + " " + this.make + ".";
    console.log(sentence);
    return sentence;
  }
};

var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};




module.getX();








var appler = function(item) {
  return item === "orange";
}

var arr = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
var fruits = ["apple", "orange", "pear", "pear", "banana"];

function remover(arg) {
  for (var i = 1; i < arg.length; i++) {
    if (arg[i - 1] === arg[i]) {
      arg.splice(arg[i - 1], 1);
    }
  }
  console.log(arg);
  console.log(arg.length);
  return arg.length;
}

remover(arr);