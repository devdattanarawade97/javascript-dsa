
const checkPalindrome = (word) => {
    

    let reversedArr = Array.from(word).reverse();


    let reversedString = [...reversedArr].join('')
    
    if (word === reversedString) {
        return true;
      }
    return false;

}

module.exports = checkPalindrome;