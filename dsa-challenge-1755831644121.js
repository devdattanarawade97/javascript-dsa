


let index = 0;
let charCount = 0;
function solve(s, c) {
  // Your code here
  console.log('substr : ', s.substr(3));

  console.log('char count : ', charCount);
  let newStr=s.substr(index)
  
if (newStr.includes(c)) {
     charCount = +1;
  }
  
  console.log('index : ', index)
  console.log('s length : ', s.length)
  return s.length==0 ?charCount: solve(newStr.substr(index+1), c)
}


let s = "ProgrammingIsFun"
let c = "m"
console.log(solve(s, c))


function solve(s, c) {
  // 1. Base Case: If the string is empty, there are no characters to count.
  if (s.length === 0) {
    return 0;
  }

  // 2. Recursive Step:
  // Check if the first character of 's' matches 'c'.
  const currentCharCount = (s[0] === c) ? 1 : 0;

  // Recursively call the function for the rest of the string (s from the second character onwards)
  // and add its result to the current character's count.
  return currentCharCount + solve(s.slice(1), c);
}

// Example usage:
// let s = "ProgrammingIsFun";
// let c = "m";
// console.log(`Character '${c}' appears ${solve(s, c)} times in "${s}"`); // Expected: 2

// s = "Hello World";
// c = "o";
// console.log(`Character '${c}' appears ${solve(s, c)} times in "${s}"`); // Expected: 2

// s = "apple";
// c = "p";
// console.log(`Character '${c}' appears ${solve(s, c)} times in "${s}"`); // Expected: 2

// s = "Banana";
// c = "a";
// console.log(`Character '${c}' appears ${solve(s, c)} times in "${s}"`); // Expected: 3

// s = "test";
// c = "z";
// console.log(`Character '${c}' appears ${solve(s, c)} times in "${s}"`); // Expected: 0

// s = "";
// c = "a";