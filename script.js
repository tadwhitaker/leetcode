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

// Maximum depth of a binary tree

// var tree = {
//   value: 8,
//   left: {
//     value: 3,
//     left: {
//       value: 1,
//       left: null,
//       right: {
//         value: 6,
//         left: {
//           value: 4,
//           left: null,
//           right: null
//         },
//         right: {
//           value: 7,
//           left: null,
//           right: null
//         }
//       }
//     }
//   },
//   right: {
//     value: 10,
//     left: null,
//     right: {
//       value: 14,
//       left: {
//         value: 13,
//         left: {
//           value: 13,
//           left: null,
//           right: null
//         }
//       },
//       right: null
//     }
//   }
// };

// var sample = {
//   value: 100,
//   left: null,
//   right: null
// };

// var maxDepth = 0;

// var maximumDepth = function(n) {

//   for (var key in n) {
//     if (key.left) {

//     }
//   }

// return maxDepth;
// };

// maximumDepth(sample);






// Is one string a substring of another?

var abba = 'abba'; 
var babba = 'ndndndndnabba';

var substrIndex = function (needle, haystack) {
  var answer = haystack.indexOf(needle);
  if (answer === -1) {
    console.log("No, the substring does not exist.");
    return;
  } else {
    console.log("Yes, the substring begins at position " + answer + ".");
    return;
  }
};

substrIndex(abba, babba);




// * Write a function that capitalizes all of the words in
// * a sentence.
// *
// * Examples:
// *
// *   capitalize("Hello world");
// *   => "Hello World"
// *
// *   capitalize("1st thing");
// *   => "1st Thing"
// *
// *   capitalize("javaScript language");
// *   => "JavaScript Language"
// *
// * @param  {String} sentence
// * @return {String}
// */

// var sample = "javascript language";

// var capitalize = function(sentence) {
//   var arr = [];
//   var noComma = sentence.replace(/\W+/g, ' ');
//   var split = noComma.split(" ");
//   for (var i = 0; i < split.length; i++) {
//       var upperCased = split[i].charAt(0).toUpperCase() + split[i].slice(1);
//       arr.push(upperCased);
//   }
//   sentence = arr.join().replace(/\W+/g, ' ');
//   return sentence;
// };

// capitalize(sample);




/**
* Write a function that takes in a sentence as an argument.
* The sentence always contains one comma, which divides
* the sentence into two strings.
*
* The function should return true if the first part of the string
* (the part before the comma) ends with second part of
* the string (the part after the comma).
*
* Examples:
*
*   endsWith("San Francisco,Francisco");
*   => true
*   endsWith("San Francisco,San");
*   => false
*   endsWith("San Francisco,Jose");
*   => false
*   endsWith("San Diego,go");
*   => true
*   endsWith("Palo Alto,Palo");
*   => false
*   endsWith("Raise.me,Me");
*   => false
*
* @param  {String} sentence
* @return {Bool} true or false
*/

// var test = "San Francisco,Francisco";

// var endsWith = function(sentence) {
//   var noComma = sentence.replace(/\W+/g, ' ');
//   var split = noComma.split(" ");
//   if (split[1] === split[2]) {
//     console.log("True");
//     return true;
//   } else {
//     return false;
//   }
// };


// endsWith(test);













