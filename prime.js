// prime.js
function isPrime(num) {
  if (num <= 1) return false;     // 0, 1, and negatives are not prime
  if (num === 2) return true;     // 2 is the only even prime number
  if (num % 2 === 0) return false; // eliminate even numbers

  // Check divisibility from 3 to √num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = isPrime;
