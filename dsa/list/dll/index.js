class ListNode {
  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
class Solution {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addNode(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }
  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(
        "Prev:",
        currentNode.prev?.val ?? null,
        "Value:",
        currentNode.val,
        "Next:",
        currentNode.next?.val ?? null
      );
      currentNode = currentNode.next;
    }
  }
  insertBeforeHead(X) {
    const newNode = new ListNode(X);
    if (!this.head) {
      // List is empty
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }
  deleteHead() {
    if (!this.head) {
      return true;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      console.log(this.head);
      return this.head;
    }
  }
  reveresDLL() {
    let currentNode = this.head;
    let temp = null;
    while (currentNode) {
    temp = currentNode.prev;
    // Swap prev and next.
    currentNode.prev = currentNode.next; // (From this next value is accessed in next)
    currentNode.next = temp;
    currentNode= currentNode.prev; // (Now has the value of the next)
    }

    if(temp){
        this.head = temp;
    }
    return this.head
  }
}

const dll = new Solution();
dll.addNode(2);
dll.addNode(3);
dll.addNode(4);
// dll.printList();

//Given the head of a doubly linked list and an integer X, insert a
// node with value X before the head of the linked list and return the head of the modified list.
// console.log(dll.insertBeforeHead(currentHead, 1));

// Given the head of a doubly linked list,
// remove the node at the head of the linked list and return the head of the modified list.

// dll.deleteHead();
// dll.printList();


dll.reveresDLL();
dll.printList();
// Reverse Flow : null <- A <-> B <-> C -> null
// Cure == A
// temp = A.prev; // null
// A.prev = A.next; // B
// A.next = temp; // null
// currentNode = A.prev; // B (because we swapped prev/next)
//Agya smajh: just use prev and give prev val next value.
