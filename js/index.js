
const rabbit = {  
  color: 'grey',
  jumping: function(){
    return `I\'am jumping`;
  }
};

const rabbitDom = {
  name: 'Bobby',
  pet: function(){
    return `${this.name} says: Pet me`;
  },
};

const rabbitMagic = {  
  say: function(word){
    return `${this.name} says: ${word}`;
  },
};

rabbitDom.__proto__ = rabbit;
rabbitMagic.__proto__ = rabbitDom;

console.log(rabbitMagic.say('Привет Ваня'));
console.log(rabbitMagic.pet());
console.log(rabbitMagic.jumping());