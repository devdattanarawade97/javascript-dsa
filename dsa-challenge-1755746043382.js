function solve(input) {
  // Your code here

  let charFrequencies = {};

  for (let char of input) {
    
    charFrequencies[char]=(charFrequencies[char]||0)+1
  }
  console.log(charFrequencies)
  
  console.log('static prop : ', Object.getOwnPropertyNames(Object))
  console.log('dynamic prop : ', Object.getOwnPropertyNames(Object.prototype))
  let index=0
  for (let char in charFrequencies) {
    console.log('char : ', char)
 
    
    console.log('value of : ', charFrequencies[char])
    if (charFrequencies[char] == 1) {
      return index
    }
       index = +1;
  }



  return -1;
}



console.log(solve("leetcode"))