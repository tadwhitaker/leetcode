var word = "Hello My Beautiful World ";

function lastWord(arg) {
  var sample = word.split(" ");
  var last = sample[sample.length - 1].split("").length;
  console.log(last);
  return last;
}

lastWord(word);
