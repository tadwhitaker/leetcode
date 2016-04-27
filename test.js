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

// var bike = "bike";
//
// function reverser(str) {
//   var strSplit = str.split("");
//   var answer = [];
//   var length = strSplit.length;
//   var vowels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'}
//   for (var i = 0; i < length; i++) {
//     var front = strSplit[i]
//     if (vowels[front]) {
//       for (var x = length; x > 0; x--) {
//         var end = strSplit[x];
//         if (vowels[end]) {
//           answer[i] = end;
//           answer[x] = front;
//         }
//       }
//     } else {
//       answer.push(strSplit[i]);
//     }
//   }
//   var answer = answer.join("");
//   console.log(answer);
//   return answer;
// }
//
// reverser(bike);

// //String S - length N
// //Alphabet A - M characters
//
// //find i such that S[i:i+M] contains every character in A exactly once
// var A = ['a', 'b', 'c'];
// var S = 'abbbcaaba';
//
//
// var findPosition = function(arg) {
//   var Keys = {};
//   var answer = true;
//   for (var i = 0; i < A.length; i++) {
//     Keys[A[i]] = A[i];
//   }
//
//   var argSplit = arg.split("");
//   console.log(argSplit)
//   for (var x = 0; x < arg.length; ) {
//     var current = argSplit[i];
//     if (Keys[current]) {
//       x++;
//     } else {
//       return false;
//     }
//   }
//
//   for (var q = 0; q < argSplit.length; q++) {
//     var current = argSplit[i];
//
//   }
//   return answer;
// };
//
// findPosition(S);
