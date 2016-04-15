var Stack = function() {
  this.container = Object.create(methods);
  this.size = 0;
};

methods.prototype.push = function(arg) {
  this.container[this.size] = this.container[arg];
  this.size += 1;
};

methods.prototype.pop = function() {
  delete this.container[this.size];
  this.size -= 1;
};

methods.prototype.size = function() {
  return this.size;
};

var methods = {};

var Tad = new Stack();
