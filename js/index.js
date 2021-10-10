function CoffeeMachine(brand= 'Ford', maxVolume=150){
  this.brand = brand;
  this.maxVolume = maxVolume; //ml
  this.volume = 0;
  this.isOn = false;

  this.addWater = function(value){
    
      if(value<0 || value+ this.volume >=this.maxVolume){
        return false;
      };
     return this.volume += value;
    };    
  

  this.makeCoffee = function(value){
    if(this.isOn){ 
      if(value<0|| this.volume-value<0){
        return false;
      }
      return this.volume -= value;     
    }
    return false;    
  };

 
  this.turnOn = function(){
    if(this.isOn){
      return this.isOn = false;      
    } 
    return this.isOn = true
  };
  

};
const test = new CoffeeMachine('Yacobs', 160);