'use strict';
      // 08.10.2021
// Задачи на работу с массивами в JavaScript
      // concat
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const resultConcat = arr1.concat(arr2);
// console.log(resultConcat);

      // reverse
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr3 = [1, 2, 3];
const resultReverse = arr3.reverse();



      // push, unshift
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr4 = [1, 2, 3];
const resultPush = arr4.push(6,5,6);
// console.log(resultPush, arr4);
const resultUnshift = arr4.unshift(1,2,3);
// console.log(resultUnshift, arr4);

      // shift, pop
// Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
//  Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const arr5 = ['js', 'css', 'html'];
const resultShift = arr5.shift();
// console.log(resultShift, arr5 );
const arr6= ['js', 'css', 'html'];
const resultPop = arr6.pop();
// console.log(resultPop, arr6);


      // slice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arr7 = [1, 2, 3, 4, 5];
const resultSlice1 = arr7.slice(0, 3);
// console.log(resultSlice1);
const arr8 = [1, 2, 3, 4, 5];
const resultSlice2 = arr8.slice(3);
// console.log(resultSlice2);


      // splice
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr9 = [1, 2, 3, 4, 5];
const resultSplice1 =arr9.splice(1,2);
// console.log(arr9);
const arr10 = [1, 2, 3, 4, 5];
const resultSplice2 = arr10.splice(1,3)
// console.log(resultSplice2);
const arr11 = [1, 2, 3, 4, 5];
const resultSplice3 = arr11.splice(3, 0, 'a', 'b', 'c');
// console.log(arr11);
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b' );
arr12.splice(-1, 0, 'c' );
arr12.splice(8, 0, 'e' );
// console.log(arr12);


      // sort
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr13 = [3, 4, 1, 2, 7];
const resultSort = arr13.sort();
// console.log(arr13);

    // Object.keys
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const obj1 = {js:'test', jq: 'hello', css: 'world'};
const resultObjectKeys = Object.keys(obj1);
// console.log(resultObjectKeys)


    // Во всех заданиях создать функцию!!!!

// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
const hasElem = function (array, string){
  for(let i = 0; i<array.length; i++){ 
    if(array[i]===string){
      return true;
    }
  }
  return false
}

const arrayStr = ['a', 'b', 'c', 'd'];
// console.log(hasElem(arrayStr, 'b'));

// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

// функция предыдущая 
const arrayNums = [1, 2, 3, 4, 4];
// console.log(hasElem(arrayNums, 3))


// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.
const haveEqual = function(arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i-1]===arr[i]){
      return true
    }    
  }
  return false
}
// console.log(haveEqual(arrayNums))

// Заполните массив 10 случайными числами в диапазоне от 15 до 78. Math.random()
const arrayRandom = [];
const fillArray = function(){
  for (let i = 0; i < 11; i++){
    arrayRandom[i] = Math.floor((Math.random()*63)+15);
  }
  return arrayRandom;
}
// console.log(fillArray());

// Дан массив 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. 
const arr14 = [4, -2, 5, 19, -130, 0, 10];

const findMinMax = function(arr){
  let findMin = 0;
  let findMax = 0;
  const minMaxArr = {};
  for (let i = 0; i < arr.length; i++){
    if(findMin>arr[i]){
      minMaxArr.findMin = arr[i];
    } 
    if (findMax<arr[i]){
      minMaxArr.findMax=arr[i];
    }    
  }
  return minMaxArr;
};

// console.log(findMinMax(arr14));


// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const arr15 = [12, 15, 20, 25, 59, 79];
const findAverageValue = function(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum+=arr[i];
  }
  return sum/2;
}
// console.log(findAverageValue(arr15));



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

 const returnMult = function(arr){ 
   let mult =  1;
   arr.forEach(function(num){
    return mult = mult * num;
   }); 
   return mult;
 };

  console.log(returnMult(array));

