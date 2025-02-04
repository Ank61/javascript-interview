// a Set is an integrated object that allows you to store unique values of any type, whether primitive values or object references.

//Unlike arrays, Sets automatically enforce uniqueness, meaning you can't have duplicate elements in a Set.

//Supports efficient lookup (O(1) complexity for checking existence).

//SET VS ARRAY
// Feature	Set	Array
// Allows Duplicates	❌ No	✅ Yes
// Insertion Order	✅ Yes	✅ Yes
// Lookup Time Complexity	O(1)	O(n)
// Iteration	✅ Yes	✅ Yes
// Methods	Limited	  More (map, filter, reduce, etc.)

const set = new Set([1,2,3,4,54,54,5])

console.log("set",set)

//--------------------------------------------------------------------------------------------
const mySet = new Set();
mySet.add(10);  //Instead of set() in map
mySet.add(20);
mySet.add(10); // Duplicate value, won't be added

console.log(mySet); // Set(2) {10, 20}


console.log(mySet.has(10)); // true
console.log(mySet.has(30)); // false


mySet.delete(10);
console.log(mySet); // Set(1) {20}


console.log(mySet.size); // 1

console.log(mySet.size); // 1
mySet.clear();
console.log(mySet); // Set(0) {}

//-----------------------------------------------------------------------------------------
const fruits = new Set(["apple", "banana", "mango"]);

fruits.forEach((value) => {
  console.log(value);
});

for (let fruit of fruits) {
    console.log(fruit);
  }
  
  const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
  const uniqueNumbers = [...new Set(numbers)];
  console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]
  