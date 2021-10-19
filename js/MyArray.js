/* data */
function MyArray(){
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

/* logic */
function MyArrayProto(){
  this.push = function(){ //1,2,3,4,5,8
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function(){
    if(this.length===0){
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
  this.forEach = function(func){
    for(let i=0; i<this.length;i++){
      func(this[i]);
    }
  }
  this.some = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        return true;
      }
    }
    return false;
  }
  this.every = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])===false){ 
        return false;
      }
    }
    return true;
  }
  this.filter = function(func){
    const result = new MyArray();
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }
  
  this.unshift = function(){   
    for(let i = this.length-1; i>=0; i--){      
       this[i+arguments.length]= this[i];      
    }
    this.length = this.length + arguments.length;
    
    for(let j = 0; j<arguments.length; j++){
      this[j] = arguments[j];    
    }
    return  this.length;
  }
  this.shift = function(){ 
    if(this.length===0){
      return;
    }
    const firstElement = this[0];
    for(let i =1; i< this.length; i++){
      this[i-1]=this[i]
    }
    delete this[this.length-1];
    this.length --;     
    return firstElement;
  }
  this.concat = function(){     
    const resultArr = new MyArray;
    for(let i = 0; i< this.length; i++){
      resultArr[resultArr.length++] = this[i];
    }
    for(let j = 0; j< arguments.length; j++){
      resultArr[resultArr.length++]= arguments[j];
    }
        return resultArr;
  }
  this.reverse = function(){    
    for(let i = this.length-1; i >= 0; i-- ){
      this[this.length++]= this[i];
    }
    let statCountArrayItems = 0;

    for(let j = this.length/2; j< this.length; j++ ){
      this[statCountArrayItems++] = this[j];
      delete this[j]      
    }
    this.length = statCountArrayItems;
    return this;    
  }
  this.map = function(func){
    const newArray = new MyArray;
    for(let i = 0; i< this.length; i++){
      newArray[newArray.length++] =  func(this[i]);      
    }
    return newArray;
  }
}

// unshift
// shift
// concat
// reverse
// map
const isEven = function(n) {
  return n%2 === 0;
}
const isOdd = (n) =>{
  return n%1 === 0;
}
const degreeNum = function(n){
   return n*n;
  




/* Prototype */
MyArray.prototype = new MyArrayProto();


const myArray = new MyArray(1,2,3);
// const arr2 = myArray.concat(10,8,6);
// const arr3 = myArray.concat(arr2);
// console.log(arr3);
// console.log(myArray);


}