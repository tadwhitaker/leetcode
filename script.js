// NIM Stone Game

// var game = function(n) {
//   if (n < 3) {
//     return true;
//   } else if (n % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Palindrome
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