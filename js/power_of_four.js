function powerOfFour(int) {
  var answer = false;
  var inner = function(arg) {
    var reduced = arg / 4;
    if (reduced === 1) {
      answer = true;
    } else if (reduced < 1) {
      return answer;
    } else {
      inner(reduced);
    }
  }
  inner(int);
  console.log(answer);
  return answer;
}

powerOfFour(16);
