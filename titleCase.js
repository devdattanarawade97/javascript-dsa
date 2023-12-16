const titleCase = (word) => {
    

    const arr = word.split(' ');

    let ans = "";
    for (let eachWord of arr) {
        ans = ans + eachWord[0].toUpperCase() + eachWord.substring(1)+" ";

    }
    ;
    console.log(ans);

    return ans;
}

module.exports = titleCase;