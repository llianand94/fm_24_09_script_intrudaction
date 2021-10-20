'use strict';
class Squirrel{
  constructor(name, color){
    this.name = name;
    this.sname = color;
    }
  jump(){
    return `${this.name} is jumping`;
    }
  }
class FlylingSquirrel extends Squirrel{
  constructor (name, sname, flyingRange){
    super(name, sname);
    this.flyingRange = flyingRange;
  }
  flying(){
      return `${this.name} Set  flying mode`;
  }   
}
class MagicSquirrel extends FlylingSquirrel{
  constructor(name, sname, flyingRange,songs){
    super(name, sname, flyingRange);
    this.arrayOfSongs = songs;
  }
//  get arrayOfSongs(){
//    return this.arrayOfSongs;
//  }
//  set arrayOfSongs(){
//   this.arrayOfSongs= str.split('');  
       
//    };  
 
 singSongs(){
  this.arrayOfSongs.forEach((song)=> {
    console.log(song) ;
  });
 }
 dancing(){
  return `${this.name} is  dancing`;
}
}
const animal1 = new Squirrel('Crazy', 'Noname', 21);
const animal2 = new MagicSquirrel('Mew', 'Pewpew', 20);
const string = 'sting, any, ect'
const arr = string.split(', ');
// console.log(arr);

const mySymbol1 = Symbol('Memka tolko Jla Bac');


//  20.10.2021 сложность алгоритмов Big 'O'
const arr5 = [1,2,3,4];
// константная сложность
console.log(arr5[3]);

// линейная сложность
const linearSearch = (arr, key) => {
  for(let i = 0; i< arr.length; i++){
    if(arr[i]===key){
      return i;
    }
  };
  return -1;
}
// квадратичная
const createTable = (num) => {
  const table = [];
 for (let i = 1; i <= num ;i++) {
   for(let j= 1; j<= 9; j++ ){
     table.push(`${i}*${j}= ${i*j}`)
   }   
 }
  return table;
}
// console.log(createTable(6));

// логарифмическая сложность
const sortArr = [1,3,5,6,8,9,12,14,30];

const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length-1;
  let middle;
  while(start<=end){
    middle = Math.round((start + end)/2);
    if(arr[middle]===key){
      return middle;
    }
    if(arr[middle]<key){
      start = middle + 1;
    }else {
      end = middle -1;
    }
  }
  return -1;
}
console.log(binarySearch(sortArr, 8));