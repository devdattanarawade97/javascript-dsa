

const randomString = function(){


    const charString = 'abcdefghijklmnopqr';
    let randomPass = '';
    for (let i = 0; i < 7; i++) {

        randomPass = randomPass + charString.charAt(Math.floor(Math.random() * charString.length));

    }

    return randomPass;
}


module.exports = randomString;