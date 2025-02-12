class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertion(this.root, newNode);
    }
  }
  insertion(root, newNode) {
    if (root.value < newNode) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertion(root.left, newNode);
      }
    }
    else{
      if(!root.right){
        root.right = newNode;
      }
      else{
        this.insertion(root.right, newNode);
      }
    }
  }
  preorder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);


console.log(bst.preorder())
