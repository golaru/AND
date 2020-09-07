/**
* The following is the function where the solution shall be written
*/
//Developer: George Olaru
function solution (input) {
  // logic here

try {
  //selecting the integers from string
  var regx = input.match(/\d+/g).join("");
  var digits = regx.split('').map(Number);

  //defining variables
    var length = digits.length,
      result = [digits.join("")],
      c = new Array(length).fill(0),
      i = 1, k, p;

  //looping through the array of numbers, do each permutation and add it to 'result' array
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = digits[i];
      digits[i] = digits[k];
      digits[k] = p;
      ++c[i];
      i = 1;
      result.push(digits.join(""));
    } else { 
      c[i] = 0;
      ++i;
    }
  }

//returning the sorted result array in descending order 
  return result.sort(function(a, b){return b-a});
//if no integers, catch error, return exception message
} catch(error) {
  return "error: No integers found"; 
               }
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('A NT')); // expected output "error: No integers found"