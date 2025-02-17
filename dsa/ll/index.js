// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     length() {
//         return this.length;
//     }
//     push(value) {
//         let node = new Node(value)
//         if (!this.head) {
//             this.head = node;
//             this.tail = this.head;
//         }
//         else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.length++;
//         return this
//     }
//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         if (!this.head) {
//             return undefined
//         }
//         let current = this.head;
//         let counter = 0;
//         while (counter !== index) {
//             current = current.next;
//             counter++;
//         }
//         return current
//     }
// }

// const ll = new LinkedList();
// ll.push(1)
// ll.push(2)
// ll.push(3)
// ll.push(4);
// console.log(ll.length())

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  print() {
    let ll = this;
    console.log(ll)
    let str = "";
    while(ll.head){
        str = str + ll.head.value + "-->";
        ll.head = ll.head.next;
    }
    console.log(str)
  }
}

const lLinked = new LinkedList();

lLinked.insert(1);
lLinked.insert(2);
lLinked.insert(3);
lLinked.insert(4);
lLinked.print();
