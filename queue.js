var Queue = function() {
  var container = Object.create(methods);
  container.storage = {};
  container.start = 0;
  container.end = 0;
  return container;
};

var methods = {};

methods.enqueue = function(arg) {
  this.storage[this.end] = arg;
  this.end++;
};

methods.dequeue = function() {
  delete this.storage[this.start];
  this.start++;
};

methods.size = function() {
  console.log((this.end));
  return this.end;
}

var Tad = new Queue();

