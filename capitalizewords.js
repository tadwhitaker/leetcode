// * Write a function that capitalizes all of the words in
// * a sentence.
// *
// * Examples:
// *
// *   capitalize("Hello world");
// *   => "Hello World"
// *
// *   capitalize("1st thing");
// *   => "1st Thing"
// *
// *   capitalize("javaScript language");
// *   => "JavaScript Language"
// *
// * @param  {String} sentence
// * @return {String}
// */

var sample = "javascript language";

var capitalize = function(sentence) {
  var arr = [];
  var noComma = sentence.replace(/\W+/g, ' ');
  var split = noComma.split(" ");
  for (var i = 0; i < split.length; i++) {
      var upperCased = split[i].charAt(0).toUpperCase() + split[i].slice(1);
      arr.push(upperCased);
  }
  sentence = arr.join().replace(/\W+/g, ' ');
  return sentence;
};

capitalize(sample);
