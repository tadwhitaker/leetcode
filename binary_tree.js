// Uses recursion to traverse the tree searching for a null leaf
// where we can add a new value.

var Node = function(data,left,right){  
    this.data = data;
    this.left = left;
    this.right = right;
};

var prettyPrint = function(cur){  
    if(cur.left != null){
        prettyPrint(cur.left);
    }
    console.log(cur.data + ", ");
    if(cur.right != null){
        prettyPrint(cur.right);
    }
};

var append = function(cur,data){  
    if(data <= cur.data ){
        if(cur.left == null){
            cur.left = new Node(data,null,null);
        } else{
            append(cur.left,data);
        }
    } else{
        if(cur.right == null){
            cur.right = new Node(data,null,null);
        } else{
            append(cur.right,data);
        }
    }
};

var BinaryTree = function(){  
    this.head = new Node(null,null,null);
};

BinaryTree.prototype.prettyPrint = function(){  
    var cur = this.head;
    prettyPrint(cur);
};

BinaryTree.prototype.append = function(data){  
    if(this.head.data == null ){
        this.head = new Node(data,null,null);
    } else{
        var cur = this.head;
        append(cur,data);
    }
};


var tree = new BinaryTree();  
tree.append(2);  
tree.append(14);  
tree.append(7);  
tree.append(5);  
tree.append(17);  
tree.prettyPrint();