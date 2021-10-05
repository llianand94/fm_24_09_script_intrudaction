// const table = {
//   '12 * 2 =': 24,
// }

const createMultiplicationTable = function(min=1, max=10) {
  const table = {};
  for(let i = min; i<=max; i++){
    for(let j = 1; j<=max; j++){
      table[`${i} * ${j} = `] = i*j; 
    }
  }
  return table;
}


const checkObject = function(str, obj){ 
  return obj[str]; 
}

const str = '2 * 2 = ';
const table = createMultiplicationTable();

console.log(checkObject(str, table));