//Problem :
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// var canPlaceFlowers = function (flowerbed, n) {
//   let flowers = n;

//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//     ) {
//       flowerbed[i] = 1;
//       flowers--;

//       if (flowers === 0) {
//         return true;
//       }
//     }
//   }
//   return flowers <= 0;
// };
//-------------------------------------------------------------------------------------------
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.


// var kidsWithCandies = function (candies, extraCandies) {
//     let maxCandies= 0;
//     let maxSumCandies;
//     let arr = [];
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] > maxCandies) {
//             maxCandies = candies[i];
//         }
//     }
//     console.log(maxCandies)
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] + extraCandies >= maxCandies) {
//             arr.push(true)
//         }
//         else {
//             arr.push(false)
//         }
//     }
//     return arr;
// };

// const reverse = kidsWithCandies([2, 3, 5, 1, 3], 3);
// console.log(reverse)

// var moveZeroes = function (nums) {
//   let nonZeroIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//           nums[nonZeroIndex] = nums[i];
//           nonZeroIndex++;
//       }
//   }
// console.log()
//   for (let i = nonZeroIndex; i < nums.length; i++) {
//       nums[i] = 0;
//   }
//   return nums
// };
// const reverse = moveZeroes([0,1,0,3,12]);
// console.log(reverse)
//-------------------------------------------------------------------------------------------
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  console.log(result)
  let leftProduct = 1;

  // First pass: calculate left products and store in result
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log("Left", result)
  let rightProduct = 1;
  // Second pass: calculate right products and multiply with result
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  console.log("Right", result)
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0,0,9,0,0]