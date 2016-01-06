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

var checkPalindrome = function(str) {
    return str == str.split('').reverse().join('');
};

