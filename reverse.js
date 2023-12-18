

const reversedString = (word) => {
    
    const reversedArr = Array.from(word).reverse();

    // console.log(reversedArr);
    
    let x = "";
    x = x + [...reversedArr].join('');

    return x;

}


module.exports = reversedString;