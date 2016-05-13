var _ = require('underscore');

// Return the indices of the two numbers that add up to a specific target.
var digits = [15, 11, 2, 7], target = 9;
//answer is [0, 1].

function adder(arg) {
  current = 0;
  var answer = [];
  for (var i = current; i < arg.length; ) {
    if (arg[current] + arg[current + 1] === target) {
      answer[0] = arg[current];
      answer[1] = arg[current + 1];
      console.log(answer);
      return answer;
    } else {
      current++;
    }
  }
  return answer;
}


adder(digits)
