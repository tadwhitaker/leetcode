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



