const maxNumber = (numArray) => {
    

    let maxNum = 0;
    for (let num of numArray) {
        
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum

}

module.exports = maxNumber;