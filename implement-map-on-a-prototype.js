Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0; i < this.length;i++){
    var newArr = callback(this[i], i , this);
  
  newArray.push(newArr);
}
  // Only change code above this line
  return newArray;
};