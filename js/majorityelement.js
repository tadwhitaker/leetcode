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




// ************** Answer 2.0 ********************


var example = [0, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2];

var here = {0: 2, 1: 4, 2: 9}

function major(arr) {
  var storage = {};
  var answer;
  for (var i = 0; i < arr.length; i++) {
    var digit = arr[i];
    if (!storage[digit]) {
      storage[digit] = 1;
    } else {
      storage[digit] = storage[digit] + 1;
    }
  }

  for (var key in storage) {
    if (answer === undefined) {
      answer = key;
    }

    if (storage[key] > storage[answer]) {
      answer = key;
    }
  }
  console.log("answer is ", answer);
  return answer;
}

major(example);
