'use strict';

class UserClass{
  /**
   * 
   * @param {string} name 
   * @param {string} sname 
   * @param {number} age MAX_AGE
   */
  constructor(name, sname, age){
    if(typeof age !== 'number'){
      throw new TypeError('Age must be a number');
    }
    if(age<0 || age> MAX_AGE){
      throw new RangeError('Enter correct age from range (0-150)')
    }
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  isAdult=()=> this.age>= ADULT_AGE;
  
}
const u3 = new UserClass('Ivan', 'Pewpew', 15)

// console.log(u3.isAdult());








class Worker{
  constructor(name, sname, dailiRate, days){
    this.name = name;
    this.sname = sname;
    this.dailyRate = dailiRate;
    this.days = days;
  }
  salary(){
    return this.dailyRate * this.days;
  }
}

const w1 = new Worker('Cesar', 'Pewpew', 500, 20);
const w2 = new Worker('Tim', 'Pewpew', 80, 21);
// console.log(w1.salary());