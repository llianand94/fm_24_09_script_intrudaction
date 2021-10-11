'use strict';

const sum = function(...arr){
  let result = null;
  
  arr.forEach((n)=>{
    result += n;
  })
  return result;
}
sum(1,2,3,4);