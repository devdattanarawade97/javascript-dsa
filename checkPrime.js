

const checkPrime = (number) => {

     
    if (number === 1) {
        console.log('1 is not prime');
    }
    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            return false;
        }
    }

    return true;
}


module.exports = checkPrime;