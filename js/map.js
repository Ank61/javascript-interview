// MAP vs OBJECT
// 1. get, set and delete are more faster than regular objects
// 2. Not only string or symbols but also object, integer or any primitive types 

const map = new Map([
    [2, "check"],
    ["test", 34455],
]);

console.log(map)
console.log(map.get("test"))
console.log(map.set("test" , "text"))
console.log(map.has("test"))
console.log(map.delete("test"))
console.log(map.get("test"))
console.log(map.size);

// set(key, value): Adds or updates an element in the Map.
// get(key): Retrieves the value associated with the specified key.
// has(key): Checks if the Map contains the specified key.
// delete(key): Removes the key and its associated value.
// clear(): Removes all elements from the Map.
// size: Returns the number of key-value pairs in the Map.

//WEAKMAP
// A WeakMap is a version of Map that holds "weak" references to keys, which are always objects. If no other references to the key exist, the key can be garbage collected.

// keys are objects
// No size method 

//Use case: WeakMap is often used for data that only needs to be temporarily associated with an object and can be cleaned up automatically when the object is no longer needed.

const weakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

// Setting key-value pairs
weakMap.set(obj1, 'data for obj1');
weakMap.set(obj2, 'data for obj2');

// Getting values
console.log(weakMap.get(obj1)); // Output: 'data for obj1'

// Checking existence
console.log(weakMap.has(obj2)); // Output: true

// Deleting a key-value pair
weakMap.delete(obj2);

// obj2 is now eligible for garbage collection