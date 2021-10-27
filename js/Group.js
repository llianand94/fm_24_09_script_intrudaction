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

class Student extends User{
  constructor(name,sname,year=CURRENTYEAR){
      super(name,sname);      
      this.year= year;
  }
  get year(){
    return this._year;
  }
  set year(year){
    if(typeof year !== 'number'){
      throw new TypeError('Year of admission have to be a number');
    }
    if(year < CURRENTYEAR-4 || year > CURRENTYEAR){
      throw new RangeError(`Year of admission must be ain't less ${CURRENTYEAR-4} and no more ${CURRENTYEAR}`);
    }
    this._year=year;
  }
  get getCourse(){
    return  CURRENTYEAR-this.year+1;
  }
}

class Group{
  constructor(nameGroup, ...students){
    this.nameGroup = nameGroup;
    this.students = new Array();
    for (const student of students) {
      if(student instanceof Student){
        this.students.push(student);
      } else {
        throw TypeError('Student must inherit to the \'Student\' class');
      }            
    }
  }
  get nameGroup(){
    return this._nameGroup;
  }
  set nameGroup(nameGroup){
    if(typeof nameGroup !== 'string'){
      throw new TypeError('Specify name of group by letters');
    }
    this._nameGroup=nameGroup;
  }
  showStudents(){
    console.log('Group '+ this.nameGroup +' consist of: ')
    for (const student of this.students) {
      console.log(`${student.sname} ${student.name.slice(0,1)}.`)      
    }
  };
}


const ivan = new Student('Ivan', 'Pewpew', 2017);
const tima = new Student('Timofey', 'Yurta', 2019);
const oleg = new Student('Oleg', 'Convoke', 2017);
const me = new Student('Andrey', 'Shap', 2021);
const mentor = new Student('Elena', 'Zdanovska', 2017);
const gr1 = new Group('fm21-2', mentor, ivan, tima, oleg, me);

gr1.showStudents();
