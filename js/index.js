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
 set arrayOfSongs(){
  this.arrayOfSongs= str.split('');  
       
   };  
 
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
console.log(arr);
