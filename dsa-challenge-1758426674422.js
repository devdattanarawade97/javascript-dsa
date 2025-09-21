function solve(input) {
  // Your code here

 
  for (let x of input) {
    console.log(x)
    if (x == 0) {
      input.shift(x);
       
      
  }
}
  return input;
}


let zerosArray = [0, 1, 0, 3, 12]


console.log(solve(zerosArray))