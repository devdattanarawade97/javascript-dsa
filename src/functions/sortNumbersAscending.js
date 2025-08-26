/**
 * Sorts an array of numbers in ascending order.
 *
 * @param {number[]} numbers The array of numbers to sort.
 * @returns {number[]} A new array with the numbers sorted in ascending order.
 */
export function sortNumbersAscending(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array.");
  }

  // Filter out non-numeric values and then sort
  const numericNumbers = numbers.filter(item => typeof item === 'number' && !isNaN(item));

  // Use the Array.prototype.sort() method with a custom comparison function
  // (a - b) for ascending order
  return numericNumbers.sort((a, b) => a - b);
}