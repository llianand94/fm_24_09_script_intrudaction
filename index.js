function CoffeeMachine(brand= 'Ford', maxVolume){
  this.brand = brand;
  this.maxVolume = maxVolume; //ml
  this.volume = 0;
  this.inOn = false;

  this.addWater = function(value){
    if(this.isOn){
      if(value<0 || value+ this.volume >=this.maxVolume){
        return false;
      };
     return this.volume += value;
    }    
  };

  this.makeCoffee = function(value){
    if(value<0|| this.volume-value<0){
      return false;
    };   
    return this.volume -= value;
  };

 if(this.isOn === false){
   return null;
 };
  this.turnOn = function(value){
    
    // if(typeof(Boolean(value))){

    // }
      
  };
  

};
const test = new CoffeeMachine(undefined, 150);