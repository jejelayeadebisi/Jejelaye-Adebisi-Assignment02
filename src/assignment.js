// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/* Challenge - 1*/ 
function sumOfNumbers(arrayOfNumbers) {


  //Getting sum of numbers
  let sum = arrayOfNumbers.reduce(function(a, b){
    return a + b;
  }, 0);
  
  return sum
}
assignment.sumOfNumbers = sumOfNumbers;


/*Challenge - 2*/


function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter(number=>number%2==0).length
}
assignment.countEvenNumbers = countEvenNumbers;



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

