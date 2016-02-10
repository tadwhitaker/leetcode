var o1 = [1, 2, 3], //[1,2]
    o2 = [3, 22, 16], //[3, 16]
    o3 = [12, 10, 7, 16], //[7, 10]
    o4 = [1] //[1]
    
// Arrays of integers
// Wants the lowest two numbers of the array.
// If empty return "empty"
// If one, return integer

function checker(arg) {
    var answer;
    var sortedArg = arg.sort(function(a, b){return a-b});
    if (sortedArg.length == 0) {
        answer = "empty"
    } else if (sortedArg.length == 1) {
        answer = [];
        answer.push(sortedArg[0]);
        console.log(answer);
    } else {
        console.log(sortedArg[0]);
        answer = [];
        answer.push(sortedArg[0]);
        answer.push(sortedArg[1]);
        console.log(answer);
    }
    return answer;
}

checker(o4);


// Testing
// Check to make sure the argument is composed only array of integers. No objects, no strings, etc.
