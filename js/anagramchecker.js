// Check to see if you have valid anagrams.

var one = "cat";
var two = "dat";

var three = "anagram";
var four = "agramana";

var anagramer = function(a, b) {
  var base = a.split("").sort().join("");
  var test = b.split("").sort().join("");
  console.log(base);
  console.log(test);
  var answer;

  if (base === test) {
    answer = true;
  } else {
    answer = false;
  }

  console.log(answer);
  return answer;
};

anagramer(one, two);
