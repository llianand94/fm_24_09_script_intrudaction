class User{
  constructor(name,sname){
    this.name = name;
    this.sname = sname;
  }
  get name(){
    return this._name;
  }
  set name(name){
    if(typeof name !== 'string'){
      throw new TypeError('Specify name by letters');
    }
    this._name=name;
  }
  get sname(){
    return this._sname;
  }
  set sname(sname){
    if(typeof sname !== 'string'){
      throw new TypeError('Specify sname by letters');
    }
    this._sname=sname;
  }
  get getFullName(){
    return `${this.name} ${this.sname}.`;
  }
  
}
const newUser1 = new User('7','None');
console.log(newUser1);



class Studend extends User{
  constructor(name,sname,year=(new Date()).getFullYear()){
      super(name,sname);      
      this.year= year;
  }
  get year(){
    return this._sname;
  }
  set year(year){
    if(typeof year !== 'number'){
      throw new TypeError('Year have to be a number');
    }
    if(year < (new Date()).getFullYear()-5){
      throw new RangeError(`Year must be > ${(new Date()).getFullYear()-5)} and < ${(new Date()).getFullYear()}`);
    }
    this._year=year;
  }
  get getCourse(){
    return (new Date()).getFullYear()-this.year;
  }
}
const stud1 = new Studend('Ivan', 'Pewpew', 2017);