/**
 * Checks if a given number is a prime number.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} num The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  if (num <= 3) {
    return true; // 2 and 3 are prime numbers
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false; // Multiples of 2 or 3 are not prime (except 2 and 3 themselves, which are handled above)
  }

  // Check for prime numbers from 5 onwards
  // All primes greater than 3 can be expressed in the form 6k ± 1
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime; // Export the function for use in other modules