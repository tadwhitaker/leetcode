var stub = [1, "\n", 2, "\n", 3];

function sumOfIntergers(x) {
  var total = 0;
  for (var i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      total += x[i];
      i++;
    } else {
      i++;
    }
  }
  console.log(total);
  return total;
};

sumOfIntergers(stub);

