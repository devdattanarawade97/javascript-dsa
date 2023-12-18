

const missingNumber = (arr) => {


    let number = Math.max(...arr);
   

    let calculatedSum = 0;
    arr.forEach((ele) => calculatedSum + ele);

    // console.log(calculatedSum);


    
    let sum = arr.length * (arr.length + 1) / 2;


    return sum - calculatedSum;
}



module.exports = missingNumber;