function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function (){
  console.log('Woof!')
}

// Only change code below this line




// Only change code above this line

let beagle = new Dog();