'use strict';
     
// 11.10.2021
// 1) дописать функцию нахождения степени числа для отрицательной степени. Использовать рекурсию.
const degree = function(num, exp){
  if(num===0){
    return false;
  }
  if(exp>1){
    return num* degree(num, exp-1)
  } else if(exp===1){
    return num;
  } else if (exp<0) {
    return 1/(num* degree(num, -exp-1))
  }
 
};
const factorial = function(num){  
  if(num===0){
    return num = 1;
  }
  return num * factorial(num-1)
};

// console.log(degree(4,-2));

// 2) написать функцию, которая принимает число и возвращает вложенные пары круглых скобок, равные этому числу. Использовать рекурсию. Например,  pairBrackets(3), должна вывести:  ((())). Если число меньше 1 - выводим одну пару скобок.
const pairBrackets = function(num){
  if(num===1|| num < 1){
    return `()`;
  }
  return `(${pairBrackets(num-1)})`
};
// console.log(pairBrackets(7));

// 3) дан массив чисел. используя Math и спред оператор найдите минимальный и максимальный элементы массива.

const array = [1,2,2,6,3,4];
const findMax = Math.max(...array);
const findMin = Math.min(...array);


// 4) напишите функцию-стрелку, которая принимает неограниченное количество аргументов и возвращает их произведение.

 const returnMylt = (...num)=>{
  let result =  1;
   for(let i = 0; i < num.length; i++){
    result = result * num[i]
   }
    return result;
};

// console.log(returnMylt(1,2,3,6));  заработало ))



// 12.10.21
// Написать функцию, которая принимает сроку в качестве аргумета  и возвращает количество гласных, которые есть в этой строке.
// Гласные: a, u,e, i, o.(латиница)
// Буквы в верхнем регистре тоже считать.

const countOfVowels = function(str){
  let counter = 0;
  const getArray =  str.split('');
  
  const patternArr = ['a','u','e','i','o'];
  
    for (let i = 0; i < getArray.length; i++) {
      getArray[i]=getArray[i].toLowerCase();
      for(let j = 0; j < patternArr.length; j++){
        console.log(getArray[i]);
        if(getArray[i]===patternArr[j]){
          counter++;
        }
      }
    }
  return counter; 
      
};


// 16.10.21   task to add some class
class RangeValidator{
  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from, to){
    this._from = from;
    this._to = to;
  }
  get from(){
    return this._from;
  }
  set from(from){
    if(typeof from !== 'number'){
      throw TypeError('Parament \"from\" have to be numeric');
    }
    this.from = from;
  }
  get to(){
    return this._to;
  }
set to(to){
  if(typeof to !=='number'){
    throw TypeError('Parament \"to\" have to be numeric ');
  }
  this.to = to;
}
  get range (){
    const arr = new Array;
    arr[0] = this._from;
    arr[1] = this._to;    
    return arr;
  }
  validate(num){
    if(num>=this._from&& num<=this._to){
      return num;
    }
    throw RangeError('Value must be from range '+this._from+ ' - ' + this._to);
  }
}
const range1 = new RangeValidator(10,12);
console.log(range1.validate(11));