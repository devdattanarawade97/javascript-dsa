// buggy.test.js
const sum = require('../abc');

test('adds two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

test('handles negative numbers', () => {
  expect(sum(-2, 3)).toBe(1);
});
