const user = {
  firstName: 'Elon',
  lastName: 'Mask',
  age: 50,
  isMale: true,
}
const sayHello = function(obj){
 return `Hello, ${obj.firstName} ${obj.lastName}!`;

}
console.log(sayHello(user));