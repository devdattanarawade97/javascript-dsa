
const sumOfSqOfEvenNum = (arr) => {


    const filteredEvenArr = arr.filter((num) => {
        return num % 2 === 0;
    })

    let sum = 0;

    filteredEvenArr.forEach((num) => {
        sum = sum + num * 2;
    })


    return sum;
}


module.exports = sumOfSqOfEvenNum;