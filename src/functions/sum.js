/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 * @throws {Error} If either input is not a number.
 */
export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both inputs must be numbers.");
  }
  return a + b;
}