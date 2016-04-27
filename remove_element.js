var example = [3, 2, 2, 3];
var element = 3;

function remover(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      arr.splice(arr[i -1], 1);
    }
  }
  console.log(arr);
  console.log(arr.length);
  return arr.length;
}

remover(example, element);
