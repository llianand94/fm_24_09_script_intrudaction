'use strict';

class MyArray{
  constructor(){
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push(){ //1,2,3,4,5,8
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
      return this.length;
    }
  pop(){
      if(this.length===0){
        return;
      }
      const item = this[--this.length];
      delete this[this.length];
      return item;
    }
  forEach(func){
      for(let i=0; i<this.length;i++){
        func(this[i]);
      }
    }
  some(func){
      for(let i=0; i<this.length; i++){
        if(func(this[i])){
          return true;
        }
      }
      return false;
    }
  every(func){
      for(let i=0; i<this.length; i++){
        if(func(this[i])===false){ 
          return false;
        }
      }
      return true;
    }
  filter(func){
      const result = new MyArray();
      for(let i=0; i<this.length; i++){
        if(func(this[i])){
          result.push(this[i]);
        }
      }
      return result;
    }
  flat(depth){
    const resultArr = new MyArray;
    this.forEach((item)=>{
      if(MyArray.isMyArray(item) && depth){
        result = result.concat(item.flat(depth-1))
      } else if(item!==undefined){
        result.push(item);
      }
    })
     }
    
    unshift(){   
      for(let i = this.length-1; i>=0; i--){      
         this[i+arguments.length]= this[i];      
      }
      this.length = this.length + arguments.length;
      
      for(let j = 0; j<arguments.length; j++){
        this[j] = arguments[j];    
      }
      return  this.length;
    }
    shift(){ 
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
    concat(){     
      const resultArr = new MyArray;
      for(let i = 0; i< this.length; i++){
        resultArr[resultArr.length++] = this[i];
      }
      for(let j = 0; j< arguments.length; j++){
        resultArr[resultArr.length++]= arguments[j];
      }
          return resultArr;
    }
    reverse(){    
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
    map(func){
      const newArray = new MyArray;
      for(let i = 0; i< this.length; i++){
        newArray[newArray.length++] =  func(this[i]);      
      }
      return newArray;
    }
    

  static isMyArray(obj){
    return obj instanceof MyArray;
  }
}
 class MyArrayIterator{
   constructor(myArr){
    this.arr = myArr;
   }
  next(){
    return{
      value:this.arr[this.currentIndex++],
      done:this.currentIndex,
    };
  }
};

 [Symbol.iterator](){
  return new MyArrayIterator(this);
}
