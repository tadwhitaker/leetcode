// Move all 0's to the end while maintaining the relative order of the array.

nums = [0, 1, 0, 3, 12];

var zero = function(arg) {
  var answer;
  var notZeros = [];
  var zeros = [];
  for (var i = 0; i < arg.length; i++) {
    if (arg[i] === 0) {
      zeros.push(arg[i]);
    } else {
      notZeros.push(arg[i]);
    }
  }

  answer = notZeros.concat(zeros);
  console.log(answer);
  return answer;
}

zero(nums);
