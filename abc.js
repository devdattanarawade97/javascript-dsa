// buggy.js
function sum(a, b) {
  // BUG: accidentally concatenates strings instead of adding numbers
  return a + b;
}

module.exports = sum;
