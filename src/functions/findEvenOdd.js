/**
 * Takes an array of numbers and returns an array of objects,
 * where each object contains the number and its parity (even or odd).
 *
 * @param {number[]} numbers - An array of numbers.
 * @returns {Array<{number: number, parity: string}>} An array of objects
 *          with 'number' and 'parity' properties.
 */
export function findEvenOdd(numbers) {
  if (!Array.isArray(numbers)) {
    console.error("Input must be an array.");
    return [];
  }

  const result = [];
  for (const num of numbers) {
    if (typeof num !== 'number') {
      console.warn(`Skipping non-number element: ${num}`);
      continue;
    }
    result.push({
      number: num,
      parity: num % 2 === 0 ? 'even' : 'odd'
    });
  }
  return result;
}

// Example Usage:
// const myNumbers = [1, 2, 3, 4, 5, 6, 0, -1, -2, 10.5, 'a'];
// const classifiedNumbers = findEvenOdd(myNumbers);
// console.log(classifiedNumbers);
/* Expected output for myNumbers:
[
  { number: 1, parity: 'odd' },
  { number: 2, parity: 'even' },
  { number: 3, parity: 'odd' },
  { number: 4, parity: 'even' },
  { number: 5, parity: 'odd' },
  { number: 6, parity: 'even' },
  { number: 0, parity: 'even' },
  { number: -1, parity: 'odd' },
  { number: -2, parity: 'even' }
]
*/
