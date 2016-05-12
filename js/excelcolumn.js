// Excel Spreadsheet Column Number
var excel = function(a) {
  var str = "abcdefghijklmnopqrstuvwxyz";
  var array = str.split("");
  var answer;

  if (a <= 26) {
    answer = array[a - 1];    
  } else {
    var divider = Math.floor(a / 26);
    var modulo = a % 26;
    console.log("modulo", modulo);
    answer = array[divider - 1] + array[modulo - 1];
  }
  console.log(answer);
  return;
};

excel(27);
