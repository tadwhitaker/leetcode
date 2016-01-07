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
// var a = "abba";
// var b = "sidney";

// var palindromeChecker = function(n) {
//   var regular = n.split("");
//   var reversed = n.split("").reverse();
//   var answer = true;

//   for (var i = 0; i < regular.length; ) {
//     if (regular[i] === reversed[i]) {
//       i++;
//     } else {
//       answer = false;
//       i++;
//     }
//   }

//   return answer;
// };

// palindromeChecker(b);

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// var number = function(n) {
//   var digits = ("" + n).split("");
//   var answer = parseInt(digits[0]) + parseInt(digits[1]);
//   var answeredString = answer.toString();
//   if (answeredString.length === 1) {
//     return;
//   } else {
//     number(answer);
//   }
// };

// number(38);





















