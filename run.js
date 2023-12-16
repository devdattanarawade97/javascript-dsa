const find_sum = require('./get_sum');
const calculations = require('./calculator');
const countChar = require('./countOccurances');
const findMaxNumber = require('./findMax');
const upperCase = require('./titleCase');
const reverseString = require('./reverse');
const checkPalindrome = require('./isPalindrome');


let ans = find_sum(1, 2);


ans = calculations(4, 2, '+');


ans = calculations(4, 2, '-');

ans = calculations(4, 2, '*');

ans = calculations(4, 2, '/');

ans = calculations(4, 2, 'a');


ans = countChar('hello', 'e');

ans = findMaxNumber([1, 2, 3, 4, 5, 6]);

ans = upperCase('hello word how are you');

ans = reverseString('hello world');

ans = checkPalindrome('hello world');

ans = checkPalindrome('madam');
console.log(ans)