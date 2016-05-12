var number = 123

function reverser(arg) {
  var final = [];
  var argArray = arg.toString().split("");
  for (var i = argArray.length; i > 0; i--) {
    final.push(arg[i]);
  }
  return final;
}

reverser(number)
