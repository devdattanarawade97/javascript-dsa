

const performCalculations = (a, b, c) => {
    

    switch (c) {
        

        case  '+':
            
            return a + b;
        
        case '-':

            return a - b;
        
        case '*':
            
            return a * b;
        
        case '/':
            return a / b;
        
        default:
            
            return 'error in c';
        
    }


    
}

module.exports = performCalculations;