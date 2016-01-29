function StairCase(n) {
  n = n + 2;
  for (var i = 2; i < n; i++) {
    var empty = Array(n - i).join(" ");
    var step = Array(i).join("X");
    var solution = empty + step;
    console.log(solution);
  } 
}