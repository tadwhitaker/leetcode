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
