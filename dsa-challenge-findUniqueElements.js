/*
  Challenge: Find Unique Elements in Array

  Write a function `findUniqueElements(arr)` that takes an array `arr` as input
  and returns a new array containing only the unique elements from the original array.
  The order of the unique elements in the returned array does not matter.

  Examples:
  findUniqueElements([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
  findUniqueElements(['a', 'b', 'a', 'c', 'd', 'b']) // ['a', 'b', 'c', 'd']
  findUniqueElements([]) // []
  findUniqueElements([1, 1, 1, 1]) // [1]
*/

function findUniqueElements(arr) {
  // Using a Set to automatically handle unique values
  const uniqueSet = new Set(arr);

  // Convert the Set back to an Array
  return Array.from(uniqueSet);

  // Alternative using filter and indexOf (less efficient for large arrays):
  // return arr.filter((item, index, self) => self.indexOf(item) === index);
}

// Example Usage (for testing):
// console.log("Unique elements in [1, 2, 2, 3, 4, 4, 5]:", findUniqueElements([1, 2, 2, 3, 4, 4, 5]));
// console.log("Unique elements in ['a', 'b', 'a', 'c', 'd', 'b']:", findUniqueElements(['a', 'b', 'a', 'c', 'd', 'b']));
// console.log("Unique elements in []:", findUniqueElements([]));
// console.log("Unique elements in [1, 1, 1, 1]:", findUniqueElements([1, 1, 1, 1]));

// You can export the function if you plan to import it elsewhere
// module.exports = findUniqueElements;