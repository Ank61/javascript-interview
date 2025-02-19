// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b); // Sorting the array for two-pointer approach
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values

      for (let j = i + 1; j < n - 2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates

          let left = j + 1, right = n - 1;

          while (left < right) {
              const sum = nums[i] + nums[j] + nums[left] + nums[right];

              if (sum === target) {
                  result.push([nums[i], nums[j], nums[left], nums[right]]);
                  while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                  while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                  left++;
                  right--;
              } else if (sum < target) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }
  return result;
};

console.log(fourSum([1,0,-1,0,-2,2],0 ))

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

// var productExceptSelf = function (nums) {
//   let n = nums.length;
//   let result = new Array(n).fill(1);
//   console.log(result)
//   let leftProduct = 1;

//   // First pass: calculate left products and store in result
//   for (let i = 0; i < n; i++) {
//     result[i] = leftProduct;
//     leftProduct *= nums[i];
//   }
//   console.log("Left", result)
//   let rightProduct = 1;
//   // Second pass: calculate right products and multiply with result
//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= rightProduct;
//     rightProduct *= nums[i];
//   }
//   console.log("Right", result)
//   return result;
// };

// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0,0,9,0,0]



// var twoSum = function(nums, target) {
//     const map = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//     }
    
//     return [];
// };

// function average(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//       const averagesum = Math.floor((arr[i] + arr[j]) / 2);
//       if (averagesum === target) {
//         return true;
//       } else if (averagesum < target) {
//         i++;
//       } else {
//         j--;
//       }
//     }
//     return false;
//   }
//   console.log(average([1, 4, 7, 11, 18, 21, 33, 47, 51], 22));