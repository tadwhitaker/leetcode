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

var test = "San Francisco,Francisco";

var endsWith = function(sentence) {
  var noComma = sentence.replace(/\W+/g, ' ');
  var split = noComma.split(" ");
  if (split[1] === split[2]) {
    console.log("True");
    return true;
  } else {
    return false;
  }
};


endsWith(test);