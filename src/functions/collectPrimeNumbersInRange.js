import { isPrime } from './isPrime.js'; // Assuming isPrime is exported from isPrime.js

/**
 * Collects prime numbers within a specified range (inclusive).
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} An array of prime numbers found within the range.
 */
export function collectPrimeNumbersInRange(start, end) {
  const primes = [];
  // Ensure start is not less than 2, as 1 and below are not prime
  const actualStart = Math.max(2, start);

  for (let i = actualStart; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}