// var Queue = function() {
//   this.storage = {};
//   this.start = 0;
//   this.end = 0;
// };

// // Returns the length.
// Queue.prototype.size = function() {
//   return this.end - this.start;
// };

// // Each key is an incremented number
// Queue.prototype.push = function(x) {
//   this.storage[this.end++] = x;
// };

// // Pop off the highest key/value.
// Queue.prototype.pop = function(x) {
//   this.size();
//   this.start++;
//   var result = this.storage[this.start];
//   delete this.storage[this.start];
//   return result;
// }

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._start = 0;
  this._end = 0;
  };


Queue.prototype.enqueue = function(value){
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];

  delete this._storage[this._start];

  return result;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};


var Batman = new Queue();
Batman.enqueue("Ryan");
Batman.enqueue("Ella");
Batman.enqueue("Jenna");
Batman.enqueue("Tad");

