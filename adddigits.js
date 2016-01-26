// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

var number = function(n) {
  var digits = ("" + n).split("");
  var answer = parseInt(digits[0]) + parseInt(digits[1]);
  var answeredString = answer.toString();
  if (answeredString.length === 1) {
    return;
  } else {
    number(answer);
  }
};

number(38);