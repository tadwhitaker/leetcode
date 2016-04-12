// Node class
var Node = function(name) {
  var edges = [];
  this.name = name;
};

// Graph class
var Graph = function() {
  this.node_list = [];
};

// Contains
Graph.prototype.contains = function(item) {
  for (var i = 0; i < this.node_list.length; i++) {
    if (this.node_list[i].name === item) {
      return true;
    }
  }
  return false;
}

// Add Edge
Graph.prototype.add = function(item) {
  this.node_list.push(item);
};

//

var chronicle = new Node("chronicle");

var Google = new Graph();

Google.add(chronicle);
