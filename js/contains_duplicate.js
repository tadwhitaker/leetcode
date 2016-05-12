var unique = [0, 1, 2, 3, 4];
var duplicates = [0, 1, 2, 3, 0];

function finder(arr) {
  var storage = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (storage[item] > 0) {
      storage[item] += 1;
      console.log(item);
      return item;
    } else {
      storage[item] = 1;
    }
  }
  console.log(storage);
}

finder(duplicates);