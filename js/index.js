'use strict';
class User{
  constructor(name, sname, age){
    this.name = name;
    this.sname = sname;
    this.age = age;
    this.isBan = false;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
    }
  static isUser (obj) {
    return obj instanceof User;
  }
}
class Admin extends User{
  constructor (name, sname, age){
    super(name, sname, age);
  }
  setBan(obj){
    if(User.isUser(obj)){
      obj.isBan = !obj.isBan;
      return `Set status ${obj.isBan}`;
    }    
  }  

}
const user = new User('Petro', 'Noname', 21);
const admin = new Admin('Mew', 'Pewpew', 20);