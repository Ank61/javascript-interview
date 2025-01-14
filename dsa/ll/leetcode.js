function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// var swapPairs = function (head) {
//     if (head === null || head.next === null) return head;

//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let current = dummy;
//     console.log("Before")
//     printLinkedList(current)
//     while (current.next !== null && current.next.next !== null) {
//         let first = current.next;
//         let second = current.next.next;
//         console.log("first", first);
//         console.log("second", second);

//         first.next = second.next;
//         second.next = first;
//         current.next = second;

//         current = first;
//         console.log("After swappingd first", first);
//         console.log("After swappingd second", second);
//     }
//     console.log("After")
//     printLinkedList(dummy.next)
//     console.log(dummy === current)
//     return current.next;
// };

var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    let temp = head.next
    let ans = swapPairs(head.next.next)
    head.next = ans
    temp.next = head
    return temp
};

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}

let head = createLinkedList([1, 2, 3, 4]);
let swappedHead = swapPairs(head);
console.log(swappedHead)
// printLinkedList(swappedHead);
