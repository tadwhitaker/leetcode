// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

var arr = [0, 1, 2, 3, 2, 2, 2];

var majority = function(arg) {
  var argObj = {};
  var answer = "";
  for (i = 0; i < arg.length; i++) {
    if (argObj[arg[i]]) {
      argObj[arg[i]]++;
    }
    else {
      argObj[arg[i]] = 1;
    }
  }

  for (var key in argObj) {
    if (argObj[key] > arg.length / 2) {
      answer = argObj[key];
    }
  }

  console.log(answer);
  return answer;
};

majority(arr);
