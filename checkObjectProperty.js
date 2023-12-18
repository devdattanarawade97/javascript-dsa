

const checkProperty = (obj, property) => {
    // console.log(obj.__proto__);
    if (obj.hasOwnProperty(property)) {

        return true;
    }

    else {
        return false;
    }

}

module.exports = checkProperty;