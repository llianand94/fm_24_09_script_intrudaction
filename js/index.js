'use strict';

const user1 = {
  id:1,
  name:'Elon',
  age:50,
}
const user2 = {
  id:2,
  name:'Elon',
  age:50,
}

const msgElon = ['12','hi!','bye!'];
const msgElen = ['Qwerty','hello!','add!'];


const mapObj = new Map();
mapObj.set(user1.id, msgElen);
mapObj.set(user2.id, msgElon);


console.log(mapObj);

const getUserMsg = ({id})=>{  
  mapObj.get(id).forEach(msg=> console.log(msg)); 
}

getUserMsg(user2);

const str1 = 'qwerttt';
const str2 = 'qwerttt';
// for (const iterator of str) {
//   console.log(iterator);
// }

const createMap = (str) =>{
  const mapCompare = new Map();  
  for (const letter of str) {
    if(mapCompare.has(letter)){
      const amount = mapCompare.get(letter);
      mapCompare.set(letter,amount+1);      
    } else {
      mapCompare.set(letter,1);
    }
  }
  return  mapCompare;
}

const compare = (str1, str2)=>{
  if(str1.length !== str2.length){
    return false
  }  
  const mapCompare1 = createMap(str1);
  const mapCompare2 = createMap(str2);
  console.log(mapCompare1);  
  console.log(mapCompare2);

  if(mapCompare1.size!==mapCompare1.size){
    return false;
  }
  for (const key of mapCompare1.keys()) {
    if(mapCompare1.get(key)!==mapCompare2.get(key)){
      return false;
    }
    return true;
  }
};

compare(str1, str2);

