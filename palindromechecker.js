// Palindrome checker

var a = "abba";
var b = "sidney";

var palindromeChecker = function(n) {
  var regular = n.split("");
  var reversed = n.split("").reverse();
  var answer = true;

  for (var i = 0; i < regular.length; ) {
    if (regular[i] === reversed[i]) {
      i++;
    } else {
      answer = false;
      i++;
    }
  }

  return answer;
};

palindromeChecker(b);