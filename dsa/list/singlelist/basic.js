class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    //good for inserting and deleting (applying operations) 
    //Bad for searching and memory efficiency
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    push(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }
        else{
            //Otherwise tail which is the last element gets add on one more
            this.tail.next = node
            this.tail = node
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head
        var lastToOne = current
        //We need reference of the one before last node so we have used a while loop
        //and stored that last on in the lasttoone and use it to make a new tail
        while(current.next){
            lastToOne = current;
            current = current.next;
        }
        this.tail = lastToOne
        //Also make the next of tail ==0
        //see it as a line and you have to remove the last one how will you do it? 
        //Take the one befaore tail and then make it tail and then make that tail next =null
        // rest is all the base case safety
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        //remove the starting one
        if(!this.head){
            return undefined
        }
        var currentHead = this.head;
        this.head = currentHead.next
        this.head.next = currentHead.next.next; 
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return this;
    }
    unshift(value){
        //Adding in the start
        if(!this.head){
            return undefined
        }
        let newNode = new Node(value)
        let currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(!this.head){
            return undefined
        }
        let current=this.head;
        let counter =0 ;
        while(counter!==index){
            current = current.next;
            counter++;
        }
        return current
    }
    set(index,value){
      //Set here means that you have top set item of a index to the given value
      //It does not mean that you have to create a new node and then add into it 
      let foundNode= this.get(index)
      if(foundNode){
        foundNode.value = value;
        return true;
      }
      return false;
    }
    insert(index,value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let prev = this.get(index-1)
        let nextNode = this.get(index+1)
        prev.next = newNode;
        prev.next.next =nextNode;
        this.length++;
        return this; 
    }
    remove(index){
        if(index < 0 || index > this.length) return false;
        let prev = this.get(index-1)
        let nextNode = this.get(index+1)
        prev.next = nextNode;
        this.length--;
        return this;
    }
}
let singlyLinkedList = new LinkedList();
singlyLinkedList.push("Ankit")
singlyLinkedList.push("GoodBye")
singlyLinkedList.push("!")
// singlyLinkedList.set(1,"newHello")
// singlyLinkedList.pop()
// singlyLinkedList.shift()
// singlyLinkedList.unshift("Hello")
singlyLinkedList.insert(2,"Hello");
singlyLinkedList.remove(2);
console.log(singlyLinkedList)

//Benefits of using LL instead of arrays 
//1 => Insertion and deletion operations can be more efficient in a linked list
// compared to an array. In an array, inserting or removing an element in the 
//middle requires shifting all subsequent elements, resulting in a 
//time complexity of O(n). In a linked list, these operations can be
// performed in constant time (O(1)) by simply updating the references of
// the neighboring nodes.
//2 => Linked lists can handle memory allocation more efficiently than arrays.


//Benefits of using the arrays instead of LL
//1 Random access: Arrays provide direct and 
//constant-time access to elements using indexing.