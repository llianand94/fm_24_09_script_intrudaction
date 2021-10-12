
const maxNum = (n1,n2) => 
n1>n2? n1 : n2;

const str = 'to be or not to be';

const convert = new String(str)
const test = function (convert) {
  let indexEmpty = 0;
  for (let i = 0; i < convert.length; i++) {
     
      indexEmpty = convert.indexOf(' ');
      console.log(indexEmpty);
      indexEmpty+1
    }
    
   
}
// console.log(convert.length);
test(convert);
