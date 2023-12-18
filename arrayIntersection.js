

const arrIntersection = (arr1, arr2) => {

    let arr = [];
    arr1.forEach((ele) => {

        if (arr2.includes(ele)) {

            arr.push(ele);
        }
    })

    return arr;
}


module.exports = arrIntersection;