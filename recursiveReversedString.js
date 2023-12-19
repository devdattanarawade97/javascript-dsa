

function ReversedString(word) {

    let count = word.length;
    console.log(count);
    let reversedString = '';
    function reverse(counting) {


        if (counting === 0) {
            return ''
        }
        else {

            count--;
            console.log(word[count]);
            return word[count] + reverse(count);
        }
    }
    reversedString = reverse(count)

    return reversedString;
}

module.exports = ReversedString;