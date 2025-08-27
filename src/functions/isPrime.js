/**
 * Checks if a single number is prime.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) { // 2 and 3 are prime
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Finds all prime numbers within an array of numbers.
 *
 * @param {number[]} numbers An array of numbers to check for primality.
 * @returns {number[]} An array containing only the prime numbers from the input array.
 */
export function findPrimeNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array of numbers.");
  }
  return numbers.filter(num => typeof num === 'number' && isPrime(num));
}