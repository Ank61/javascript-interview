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
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertion(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
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

  inorder(root = this.root) {
    //Left -> Root --> Right (most basic)
    if (root) {
      //recursively finding the last left one
      this.inorder(root.left);
      //Middle one Root
      console.log(root.value);
      //recursively finding the last right one
      this.inorder(root.right);
    }
  }

  postorder(root = this.root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  findHeight(root = this.root) {
    if (!root) return -1;
    return (
      Math.max(this.findHeight(root.left), this.findHeight(root.right)) + 1
    );
  }

  isBST(root = this.root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return (
      this.isBST(root.left, min, root.value) &&
      this.isBST(root.right, root.value, max)
    );
  }

  search(value, root = this.root) {
    if (!root) return false;
    if (root.value === value) return true;
    return value < root.value
      ? this.search(value, root.left)
      : this.search(value, root.right);
  }
}

// Example Usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

// Preorder Traversal (Root → Left → Right).
// Inorder Traversal (Left → Root → Right).
// Postorder Traversal (Left → Right → Root).

console.log("Preorder Traversal:");
bst.preorder(); // Output: 10 5 3 7 15 13 18

console.log("Inorder Traversal:");
bst.inorder(); // Output: 3 5 7 10 13 15 18

console.log("Postorder Traversal:");
bst.postorder(); // Output: 3 7 5 13 18 15 10


console.log("Height of BST:", bst.findHeight());
console.log("Is BST valid?", bst.isBST());
console.log("Search 7 in BST:", bst.search(7));
console.log("Search 20 in BST:", bst.search(20));