function CoffeeMachine(brand= 'Ford', maxVolume){
  this.brand = brand;
  this.maxVolume = maxVolume; //ml
  this.volume = 0;
  this.inOn = false;

  this.addWater = function(value){
    
      if(value<0 || value+ this.volume >=this.maxVolume){
        return false;
      };
     return this.volume += value;
    };    
  

  this.makeCoffee = function(value){
    // if(this.isOn){   
    //   return this.makeCoffee(value);
    // }
    if(value<0|| this.volume-value<0){
    return false;
  }
  return this.volume -= value;
  };

 
  this.turnOn = function(){
    if(this.makeCoffee){
      return this.inOn = true;
    } 
    return this.inOn = false;
  };
  

};
const test = new CoffeeMachine('Yacobs', 150);