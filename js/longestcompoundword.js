// Given list of words, find the longest compound word, which is also a concatenation of other subwords that exist in the list
// Allow users to unput different data
// var list = ["backend", "grandmother", "back", "end", "grand", "mother"];

var compounder = function(arg) {
  var longest;
  // Sort the array so longest word is beginning
  var sorted = arg.sort(function(a, b) {
    return b.length - a.length;
  });

  // Iterate through sorted array, starting with longest word
  for (var i = 0; i < sorted.length; i++) {
    // Store first two letters of current item
    var firstTwoLetters = sorted[i].slice(0, 2);
    // Iterate through array looking for matches
    for (var x = 0; x < sorted.length; ) {
      secondSortedPair = sorted[x].slice(0, 2);
      // See if first letters match up
      if (firstTwoLetters === secondSortedPair) {
        longest = sorted[i];
        console.log("The answer = ", longest);
        return longest;
      } else {
        // If letters don't match, increase x and move to next item in array
        x++;
      }
    }
  }

  if (longest === undefined) {
    longest = "There are no compound words that satisify the instructions.";
    console.log(longest);
  }

  return longest;
};

compounder(list);