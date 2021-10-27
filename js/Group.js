class User{
  constructor(name,sname){
    this.name = name;
    this.sname = sname;
  }
  get name(){
    return this._name;
  }
  // const getNeededName = function(){
  //   return student.sname.slice(0,1).toUpperCase()+ student.sname.slice(1).toLowerCase() + ' ' + student.name.slice(0,1).toUpperCase()+ '.'};

  set name(name){
    if(typeof name !== 'string'){
      throw new TypeError('Specify name by letters');
    }
    this._name=name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase();
  }
  get sname(){
    return this._sname;
  }
  set sname(sname){
    if(typeof sname !== 'string'){
      throw new TypeError('Specify sname by letters');
    }
    this._sname=sname.slice(0,1).toUpperCase()+sname.slice(1).toLowerCase();
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
    const groupComposition = 'Group '+ this.nameGroup +' consist of: ';
    console.log(groupComposition);    
    for (const student of this.students) {
      const getNeededFormat = student.sname + ' ' + student.name.slice(0,1)+ '.';      
        console.log(getNeededFormat);          
    }
  };
}

const ivan = new Student('ivan', 'pewpew', 2017);
const tima = new Student('timofey', 'yuRTa', 2019);
const oleg = new Student('oleg', 'convoke', 2017);
const me = new Student('andrey', 'shapovalov', 2021);
const mentor = new Student('elena', 'zdanovska', 2017);
const gr1 = new Group('fm21-2', mentor, ivan, tima, oleg, me);

gr1.showStudents();
