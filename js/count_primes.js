function primer(int) {
  var intArr = [];
  for (var i = 0; i < int; i++) {
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      intArr.push(i);
    }
  }
  var count = intArr.length;
  console.log(count, intArr)
  return count;
}

primer(100);
