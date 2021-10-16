'use strict';

class UserClass{
  /**
   * @param {string} name 
   * @param {string} sname 
   * @param {number} age MAX_AGE
   */
  constructor(name, sname, age){
    
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(age){
    if(typeof age !== 'number'){
      throw new TypeError('Age must be a number');
    }
    if(age<0 || age> MAX_AGE){
      throw new RangeError(`Enter correct age from range (0-${MAX_AGE})`)
    }
    this._age = age;
  }
  get fullName(){
    return `${this.name} ${this.sname}`;
  }
  set fullName(newFullName){
    if(typeof newFullName !== 'string'){
      throw new TypeError('Age must be a string');
    }
    const arrFullName = newFullName.split(' ');
    if(arrFullName.length !== 2){
      throw new RangeError(`must be = 2`)
    }
  }
  get isAdult () {
  return this.age>= ADULT_AGE;
  } 
  static createTestUser(){
    return new UserClass('Test', 'Stest', 35)
  }
}
console.log(UserClass.createTestUser());
const u3 = new UserClass('Ivan', 'Pewpew', 19)

// console.log(u3.isAdult);








class Worker{
  constructor(name, sname, dailiRate, days){
    this.name = name;
    this.sname = sname;
    this.dailyRate = dailiRate;
    this.days = days;
  }
  set name (name){
    if(typeof name !== 'string'){
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
  set sname (sname){
    if(typeof sname !== 'string'){
      throw new TypeError('Sname must be a string');
    }
    this._sname = sname;
  }

  get dailiRate(){
    this._dailyRate = dailiRate;
  }
  set dailiRate(rate){
    if(typeof rate !== 'number'){
      throw new TypeError('DailyRate must be a number'); 
    }
    return this._dailyRate = rate;
  }

  set days(days){
    if(typeof days !== 'number'){
      throw new TypeError('Count of days must be a number'); 
    }
    return this._days = days;
  }
    
  get salary(){
    return this.dailyRate * this.days;
  }
}

const w1 = new Worker('Cesar', 'Pewpew', 500, 20);
const w2 = new Worker('Tim', 'Pewpew', 80, 21);
// console.log(w1.salary());



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