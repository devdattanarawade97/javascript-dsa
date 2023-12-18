

const duplicatesRemove = (arr) => {


    const duplicatesRemoved = [...new Set(arr)];


    return duplicatesRemoved;
}


module.exports = duplicatesRemove;