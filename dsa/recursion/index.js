// function sumArr(arr) {
//   //base condition
//   if (arr.length === 0) return 0;

//   return arr[0] + sumArr(arr.slice(1));
// }

// console.log(sumArr([1, 2, 3]));

//----------------------------------------------------------------------------
// function fac(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * fac(num - 1);
// }
// console.log(fac(5));

//----------------------------------------------------------------------------
//Create a function that flattens nested arrays into a single array
// function flat(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   const first = arr[0];
//   const rest = arr.slice(1);
//   if (Array.isArray(arr[0])) {
//     return [...flat(arr[0]), ...flat(rest)];
//   } else {
//     return [arr[0], ...flat(rest)];
//   }
// }

// console.log(flat([[1, 2, 3], [[12, 56], 2], 5]));

//------------------------------------------------------------------------------------
// Reverse a string using recursion
// function reverse(str) {
//   if (str.length === 0) {
//     return "";
//   }
//   return str[str.length - 1] + reverse(str.slice("", str.length - 1));
// }

// console.log(reverse("ankit"));
//------------------------------------------------------------------------------------
