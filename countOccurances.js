
const count = (word, char)=>{
    

    let charCount = 0;

    for (let eachChar of word) {
        
//    console.log(eachChar);
   if (eachChar === char) {
            
       charCount++;

}
   
    }
    

    return charCount


}


module.exports = count;