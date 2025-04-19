// Input: arr = [1, 2, 3, 4, 5]
// Output: LinkedList: 1->2->3->4->5
// Explanation: Linked list for the given array will be
// Given an array of integer arr. Your task is to construct the linked list from arr &
// return the head of the linked list.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class Solution {
//     construct(arr) {
//         this.head = null;
//         this.tail = null;
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             const node = new Node(element);
//             if (!this.head) {
//                 this.head = node;
//                 this.tail = node;
//             }
//             else {
//                 this.tail.next = node;
//                 this.tail = node;
//             }
//         }
//         return this.head;
//     }
// }

//----------------------------------------------------------------------------------------------------------
//Given the head of a Singly Linked List and a value x, insert that value x at the end of the LinkedList 
//and return the modified Linked List.

class Solution {
    insertAtEnd(head, x) {
        let node = head;
        let previousNode = null;
        while (node.next) {
            previousNode = node;
            if(node.next){
                node = node.next;
            }
            else{
                const newNode = new Node(x);
                node.next = newNode;
            }
        }
        return node;
    }
}
