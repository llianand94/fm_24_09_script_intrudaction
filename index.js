let num = 1;

const calcfactorial = function(num=1){
  if(num<0){
    return null;
  }
  if(num===0 || num===1){
    return 1;
  }
  if(num>100){
    return false;
  }
  let result = 1n;
  for(let i=1; i<=num; i++){
    result *= BigInt(i);
  }
  return result;
}
console.log(calcfactorial());
console.log(calcfactorial(6));


  
