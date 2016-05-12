function roman(numeral) {
  var mapping = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I" 
  };

  var arr = numeral.split("");
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "I" && arr[i + 1] === "X") {
      answer -= 1;
    } else if (arr[i] === "I" && arr[i + 1] === "V") {
      answer -= 1;
    } else if (arr[i] === "X" && arr[i + 1] === "L") {
      answer -= 10;
    } else if (arr[i] === "X") {
      answer += 10;
    } else if (arr[i] === "L") {
      answer += 50;
    } else if (arr[i] === "V") {
      answer += 5;
    }
    else {
      answer += 1;
    }
  }
  console.log(answer);
}

roman("LXXXIX");


