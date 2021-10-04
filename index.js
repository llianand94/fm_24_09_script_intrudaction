function Users(name, sname, age, isAdmin){
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.isAdmin = isAdmin;
  this.fullname = function(){
     return this.name + '  ' + this.sname;
  }
};

const artem = new Users('Artem', 'Incognito', 18, true);
const ivan = new Users('Ivan', 'Incognito', 20, false);

console.log(artem.fullname());