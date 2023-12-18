

const firstNonRepeatingChar = (word) => {


    let obj = {

    }
 console.log(Array.from(word));
    Array.from(word).forEach((char) => {
      console.log(char);
        if (obj.hasOwnProperty(char)) {
            obj[char] = obj[char] + 1;
        } else {

            obj[char] = 1;
        }

    })

   console.log(obj);
    for (let key in obj) {

        if (obj[key] === 1) {
            return key;
        }
    }

}

module.exports = firstNonRepeatingChar;