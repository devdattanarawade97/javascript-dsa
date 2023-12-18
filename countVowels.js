

const Vowel = (word) => {

    const arr = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let char of word) {

        if (arr.includes(char)) {
            count++;
        }
        



    }

    return count;
}

module.exports = Vowel