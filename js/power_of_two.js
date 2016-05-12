function power(num) {
  var answer = false;
  // var sum = 2;

  // for (var i = 2; i <= int; i++) {
  //   console.log(sum);
  //   sum = sum * 2;
  //   console.log(sum);
  //   console.log("Iteration ", i);
  // }
  // console.log(sum);

  var total;
  var inner = function(int) {
    total = int / 2;
    console.log("total is now", total);
    if (total > 1) {
      inner(total);
    } else if (total === 1) {
      answer = true;
      return;
    } else {
      return;
    }
  };
  inner(num);
  console.log(answer);
  return answer;
}

power(8);