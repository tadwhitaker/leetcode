// Add a construct method on all functions that creates a new Object
// and applies aArgs to it.
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};

// Knowing we're going to use apply rather than call, we create a bikConstructor
// this will iterate over any arguments passed in and use the this key word to set
// the values on the proper Object.
function bikeConstructor() {
  for (var i = 0; i < arguments.length; i++) {
    this['property' + i] = arguments[i];
  }
}

var haro = ['haro', 'pink', 299];

var Haro = bikeConstructor.construct(haro);


console.log(Haro);