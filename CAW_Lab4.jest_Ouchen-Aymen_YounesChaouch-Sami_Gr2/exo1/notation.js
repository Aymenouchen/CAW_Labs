
function mean(scores) {
    if (scores.length === 0) {
        return 0; 
    }
    
    const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / scores.length;
}


module.exports = mean; 
