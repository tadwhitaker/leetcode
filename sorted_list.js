var Node = function(data, next) {
  this.data = data;
  this.next = next;
}

Node.prototype.getData = function() {
  console.log(this.data);
}

var LinkedList = function() {
  this.head = new Node(null);
  this.length = 0;
}

LinkedList.prototype.prettyPrint = function() {
  var cur = this.head;
  var result = "";
  while (cur != null) {
    if (cur.next == null) {
      result += cur.data;
    } else {
      result += cur.data + ", ";
    }
    cur = cur.next;
  }
  console.log(result);
}

LinkedList.prototype.append = function(data) {
  if (this.head.data == null) {
    this.head = new Node(data, null);
  } else {
    var cur = this.head;
    while (cur.next != null) {
      cur = cur.next;
    }
    var node = new Node(data, null);
    cur.next = node;
  }
  this.length += 1;
};

LinkedList.prototype.prepend = function(data) {
  if (this.head.data == null) {
    this.head = new Node(data, null);
  } else {
    var node = new Node(data, this.head);
    this.head = node;
  }
  this.length +=1;
}

LinkedList.prototype.getHead = function() {
  return this.head;
};

LinkedList.prototype.get = function(offset) {
  if(offset < this.length) {
    var cur = this.head;
    for (var i = 0; i < offset; i++) {
      cur = cur.next;
    }
    return cur;
  }
  else {
    return "you asked for an element outside the list";
  }
};

LinkedList.prototype.remove = function(data) {
  // front of the list
  if(this.head.data == data) {
    var cur = this.head;
    cur = cur.next;
    this.head = cur;
    return true;
  } else {
    var cur = this.head;
    var prev = this.head;
    var counter = 0;
    while (cur.data != data) {
      if (counter < this.length) {
        if (counter > 0) {
          prev = prev.next;
        }
        cur = cur.next;
        counter += 1;
      } else {
        return false;
      } // assumes element was found
      // if element was last in the list.
      if (counter == this.length -1) {
        prev.next = null;
        delete cur;
        return true;
      } else { // somewhere in the middle
        cur = cur.next;
        prev.next = cur;
        return true;
      }
    }
  }
}

LinkedList.prototype.sorted = function() {
  var current = this.head.data;
  var next = this.head.next.data;
  if (current === next) {

  }

};



var duplicates = new LinkedList();
duplicates.append(1);
duplicates.append(1);
duplicates.append(2);
duplicates.append(3);

console.log(duplicates);

duplicates.sorted();