// 19
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Function that returns true or false if a number is happy.
// A number is happy if you can split it, square each integer and the sum equals 1

// 100
// 1^2 + 0^2 +

function happyNumber(arg) {
    var storage = {};

    // Recrusive function.
    var innerFunction = function (item) {
        var argArray = ("" + item).split("");
        var sum = 0;
        for (var i = 0; i < argArray.length; i++) {
            total = parseInt(argArray[i]) * parseInt(argArray[i])
            sum += total;
        }

        if (sum === 1) {
            return true;
        } else if (storage[sum]) {
            return false;
        } else {
            storage[sum] = sum;
            return innerFunction(sum);
        }
    }

    return innerFunction(arg);
};

console.log(happyNumber(998));






//  ************ Version 2.0 ********************

var double = 19;

function happy(num) {
  var numArray = num.toString().split('');
  for (var i = 0; i < numArray.length; i++) {
    numArray[i] = parseInt(numArray[i]);
  }
  console.log(numArray)

  var sum = 0;
  for (var x = 0; x < numArray.length; x++) {
    sum += numArray[x] * numArray[x];
  }

  if (sum === 1) {
    console.log("It's a happy number.");
    return true;
  } else {
    happy(sum);
  }
}

happy(19);
