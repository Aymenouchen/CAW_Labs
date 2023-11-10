function mean(scores) {
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
  }
  
module.exports = mean;  