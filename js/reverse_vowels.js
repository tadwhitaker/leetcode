var hello = "hello";

function reverser(str) {
  var arr = str.split("");
  var length = arr.length;
  var vowels = [];
  for (var i = 0; i < length; i++) {
    var current = arr[i];
    if (current === 'a') {
      vowels.push(current);
      arr.splice(i, 1, undefined);
  } else if (current === 'e' ) {
    vowels.push(current);
    arr.splice(i, 1, undefined);
  } else if (current === 'i') {
    vowels.push(current);
    arr.splice(i, 1, undefined);
  } else if (current === 'o') {
    vowels.push(current);
    arr.splice(i, 1, undefined);
  } else if (current === 'u') {
    vowels.push(current);
    arr.splice(i, 1, undefined);
  }
  }
  vowels = vowels.reverse();
  var iterator = 0;
  for (var x = 0; x < length; x++) {
    if(arr[x] === undefined) {
      arr[x] = vowels[iterator];
      iterator++;
    }
  }
  console.log(arr);
}

reverser(hello);
