'use strict';

const degree = function(num, exp){
  if(exp===1){
    return num;
  }

  return num* degree(num, exp-1)
}
const factorial = function(num){
  
  if(num===0){
    return num = 1;
  }
  return num * factorial(num-1)
}

console.log(factorial(5));

