// function* generator() { // Correct placement of *
//     let i = 0;
//     while (i < 10) {
//       yield i++; // Yield the current value of i before incrementing
//     }
//   }
  
//   const gen = generator(); // Create generator instance
  
//   console.log(gen.next()); // { value: 0, done: false }
//   console.log(gen.next()); // { value: 1, done: false }
//   console.log(gen.next()); // { value: 2, done: false }
  


//----------------------------------------------------
//Iterator
const iterator = [1, 2, 3][Symbol.iterator](); // Get iterator for the array

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
