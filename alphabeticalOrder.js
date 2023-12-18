


const alphabeticalOrder = (word) => {



    const arr = Array.from(word);
    // console.log(arr);

    const sortedArr = arr.sort();

    return sortedArr.join('');

}


module.exports = alphabeticalOrder;