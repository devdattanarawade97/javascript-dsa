

const formatedNumber = (word) => {


    const firstSection = Array.from(word).slice(0, 3).join('');
    const secondSection =Array.from(word).slice(4).join('');

    const final = `(${firstSection})-${secondSection}`;

    return final;


}


module.exports = formatedNumber;