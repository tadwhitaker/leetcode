var valid = "(){}[]";
var notValid = "(){[}]"

function validator(arg) {
  var sample = arg.split("");
  console.log(sample)
  var answer = true;
  var length = sample.length;
  if (sample.length % 2 != 0) {
    console.log("Odd character counter.");
    return answer;
  }

  for (var i = 0; i < length; i = i + 2) {
    var current = sample[i];
    var next = sample[i + 1];
    if (current === '(' & next === ')') {
      console.log("The values match");
    } else if (current === '{' & next === '}') {
      console.log("The values match");
    } else if (current === '[' & next === ']') {
      console.log("The values match")
    } else {
      answer = false;
      console.log(answer);
      return answer;
    }
  }
  console.log(answer);
  return answer;
}

validator(valid);
