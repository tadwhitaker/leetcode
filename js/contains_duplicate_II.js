var list = [2, 1, 9, 2, 8, 4, 3, 5, 6];
var contains = function(arg, position) {
  var answer = false;
  var storage = {}
  for (var i in arg) {
    var current = arg[i];
    if (storage[current]) {
      console.log(storage[current]);
      console.log(i);
      var equation = Math.abs(storage[current] - i);
      console.log(equation);
      if (equation <= position) {
        answer = true;
        console.log(answer);
        return answer;
      }
    }
    storage[current] = i;
  }
  console.log(answer);
  return false;
}

contains(list, 9);
