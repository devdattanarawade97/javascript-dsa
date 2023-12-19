const find_sum = require('./get_sum');
const calculations = require('./calculator');
const countChar = require('./countOccurances');
const findMaxNumber = require('./findMax');
const upperCase = require('./titleCase');
const reverseString = require('./reverse');
const checkPalindrome = require('./isPalindrome');

const removeDupli = require('./removeDuplicate');
const checkProperty = require('./checkObjectProperty');
const doAlphabeticalOrder = require('./alphabeticalOrder');

const countVowel = require('./countVowels');
const arrIntersection = require('./arrayIntersection');
const missingNumber = require('./missingNumber');
const firstNonRepeatingChar = require('./firstNonRepeatingChar');
const formatedNumber = require('./formatedNumber');
const randomString = require('./randomString');

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


ans = removeDupli([1, 2, 4, 5, 5]);

ans = checkProperty({

    name: 'abc',
    sirname: 'cde'

}, 'cd')


ans = doAlphabeticalOrder('hello world');


ans = countVowel('hello world');


ans = arrIntersection([1, 2, 3, 4], [1, 2, 3]);

ans = missingNumber([1, 3, 4, 5, 10]);


ans = firstNonRepeatingChar('hheel')


ans = formatedNumber('14664664');

ans = randomString();
console.log(ans)