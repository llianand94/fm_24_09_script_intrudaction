let count = 0;
while(true){
  
  const password = prompt('Enter the password');
  count++;  
  const result = MAX_NUMBER_GUESSES-count;
  
  console.log(result);

  if(password===RIGHT_PASSWORD){
    alert('Thanks');
    break;
  }
  if(count===MAX_NUMBER_GUESSES){
    alert('Thanks have no guesses');
    break;
  }
    alert('you tryies yet: '+ result);
}
  
  
