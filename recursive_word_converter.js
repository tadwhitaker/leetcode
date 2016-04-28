var word = "dog";

// answer: 'Dog', 'dOg', 'doG', 'DOg', 'dOG', 'DOG'

function converter(arg) {
  var argArray = arg.split("");
  var answerArray = [];

  var inner = function(argArray) {
    for (var x = 0; x < argArray.length; x++) {
      for (var i = x; i < argArray.length; i++) {
        argArray[i] = argArray[i].toUpperCase();
        var word = argArray.join("");
        answerArray.push(word)
      }
      argArray = arg.split("");
    }
  }
  inner(argArray);
  console.log(answerArray);
  return answerArray;
}

converter(word);
