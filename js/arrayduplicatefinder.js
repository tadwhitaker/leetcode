// Find if an array of integers contains any duplicates.

var yes = [0, 1, 2, 3, 3];
var no = [0, 1, 2, 3, 4, 5];

var duplicateFinder = function(a) {
  var answer;
  var storage = {};
  for (var i = 0; i < a.length; i++) {
    var item = a[i];
    if (storage[item]) {
      incriment = storage[item] + 1;
      storage[item] = incriment;
    } else {
      storage[item] = 1;
    }
  }

  for (var key in storage) {
    if (storage[key] > 1) {
      answer = true;
    } else {
      answer = false;
    }
  }
  console.log(storage);
  console.log(answer);
  return answer;
};

duplicateFinder(no);
