function power(int) {
  var answer = false;

  var total = int;
  function inner(total) {
    total = total / 3;
    if(total > 1) {
      inner(total);
    } else if (total === 1) {
      answer = true;
      return;
    } else {
      return;
    }
  }

  inner(int);
  console.log(answer);
  return answer;
}

power(11);