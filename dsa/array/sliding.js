// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// var lengthOfLongestSubstring = function(s) {
//     let startIndex = 0;
//     let endIndex = 0;
//     const window = new Set();
//     let maxLength = 0;

//     while (endIndex < s.length) {
//         if (!window.has(s[endIndex])) {
//             window.add(s[endIndex]);
//             maxLength = Math.max(maxLength, endIndex - startIndex + 1);
//             endIndex++;
//         } else {
//             window.delete(s[startIndex]);
//             startIndex++;
//         }
//         console.log(window.values())
//     }

//     return maxLength;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))

// var longestOnes = function (nums, k) {
//   let longest = 0;
//   let flip = k;
//   let startIndex = 0;
//   let endIndex = 0;

//   while (endIndex < nums.length) {
//     if (nums[endIndex] === 0) {
//       flip--;
//     }

//     // execute only when there is flip is exhasted
//     while (flip < 0) {
//       //Restoring k which were lost
//       if (nums[startIndex] === 0) {
//         flip++;
//       }
//       startIndex++;
//     }

//     longest = Math.max(longest, endIndex - startIndex + 1);
//     endIndex++;
//   }

//   return longest;
// };

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// var numSubarraysWithSum = function (nums, goal) {
//   let startIndex = 0;
//   let endIndex = 0;
//   let tempArr = [];
//   const output = [];
//   while (endIndex < nums.length) {
//     let sum = 0;
//     for (let i = startIndex; i <= endIndex; i++) {
//       sum = sum + nums[i];
//       tempArr.push(nums[i]);
//     }
//     if (sum === goal) {
//       output.push(tempArr);
//     } else if (sum < goal) {
//       endIndex++;
//     } else {
//       startIndex++;
//     }
//     endIndex++;
//     sum = 0;
//     tempArr = [];
//   }
//   console.log(output);
//   return output.length;
// };

// var numSubarraysWithSum = function (nums, goal) {
//   let startIndex = 0;
//   let output = 0;
//   while (startIndex < nums.length) {
//     let sum = 0;
//     for (let i = startIndex; i < nums.length; i++) {
//       sum = sum + nums[i];
//       if (sum == goal) {
//         output++;
//       }
//     }
//     startIndex++;
//   }
//   return output;
// };

// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

//-------------------------------------------------------------

// Given an array of integers and a number k, find the maximum sum of a
// subarray of size k.

// function maxSubArr(arr, k) {
//   let maxSum = -Infinity;

//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     maxSum = Math.max(maxSum, sum);
//   }

//   return maxSum;
// }

// function maxSubArr(arr, k) {
//   //using sliding window
//   let windowSum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < k; i++) {
//     windowSum = windowSum + arr[i];
//   }
//   maxSum = windowSum;

//   for (let i = k; i < arr.length; i++) {
//     windowSum += arr[i] - arr[i - k]; //adding windowsum next sum and check
//     maxSum = Math.max(windowSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(maxSubArr([1, 7, 3, 4, 5, 6], 3));

//-------------------------------------------------------------
// Given a string text and a string pattern, return the count of occurrences of anagrams of pattern in text.
// Example:
// Input: text = "cbaebabacd", pattern = "abc"
// Output: 2
// Explanation: The anagrams "cba" and "bac" appear in the string.
// function anagram(str, key) {
//   //sliding window with map;
//   const map = new Map();
//   let count = 0;
//   for (let i = 0; i < key.length; i++) {
//     if (!map.has(key[i])) {
//       map.set(key[i], 1);
//     } else {
//       map.set(key[i], map.get(key[i]) + 1);
//     }
//   }

//   //Sliding window
//   let startIndex = 0;
//   while (startIndex <= str.length - key.length) {
//     const temp = new Map(map);
//     for (let i = startIndex; i < startIndex + key.length; i++) {
//       //for each window of k length
//       if (temp.has(str[i])) {
//         let getCount = temp.get(str[i]);
//         getCount--;
//         if (getCount === 0) {
//           temp.delete(str[i]);
//         } else {
//           temp.set(str[i], getCount);
//         }
//       } else {
//         break;
//       }
//     }
//     if (temp.size === 0) {
//       count++;
//     }
//     startIndex++;
//   }
//   return count;
// }
// console.log(anagram("cbaebabacd", "abc"));

//----------------------------------------------------------------
// Find Average of All Contiguous Subarrays of Size K
// Input: arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5
// Output: [2.2, 2.8, 2.4, 3.6, 4.4]
// Explanation: Sliding windows of size 5 produce these averages.

// function avgInt(arr, k) {
//   let windowSum = 0;
//   let windowStart = 0;
//   const ouput = [];
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];

//     //if last elemtn hit
//     if (windowEnd >= k - 1) {
//       ouput.push(windowSum / k);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return ouput;
// }
// console.log(avgInt([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

//----------------------------------------------------------------------------

// Longest Substring with K Distinct Characters
// Problem:Given a string s and an integer k, return the length
// of the longest substring that contains exactly k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: "ece" has exactly 2 distinct characters.

// Brute Force
// function longSub(str, k) {
//   let maxLen = 0;
//   for (let i = 0; i < str.length - k; i++) {
//     let tempSet = new Set();
//     for (let j = i; j < str.length; j++) {
//       tempSet.add(str[j]);
//       const uniqueLength = tempSet.size;

//       if (uniqueLength === k) {
//         maxLen = Math.max(maxLen, j - i + 1);
//       } else if (uniqueLength > k) {
//         break;
//       }
//     }
//   }
//   return maxLen;
// }
// console.log(longSub("eceba", 2));

// //Optimized Sliding Window
// function longSub(str, k) {
//   let maxLen = 0;
//   let windowStart = 0;
//   const uniqueMap = new Map();
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     //keep on adding elements in map with their count
//     uniqueMap.set(str[windowEnd], (uniqueMap.get(str[windowEnd]) || 0) + 1);

//     if (uniqueMap.size > k) {
//       let getCount = uniqueMap.get(str[windowStart]);
//       getCount--;
//       if (getCount > 0) {
//         uniqueMap.set(str[windowStart], getCount);
//       } else if (getCount === 0) {
//         uniqueMap.delete(str[windowStart]);
//       }
//       windowStart++;
//     } else if (uniqueMap.size === k) {
//       maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
//     }
//   }
//   return maxLen;
// }
// console.log(longSub("eceba", 2));

//------------------------------------------------------------------
// Longest Substring Without Repeating Characters
// Find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: "abc" is the longest substring with all unique characters.

//Brute Force
// function longWithoutRepeats(str) {
//   let maxLength = 0;

//   for (let i = 0; i < str.length; i++) {
//     const seen = new Set();
//     for (let j = i; j < str.length; j++) {
//       if (seen.has(str[j])) {
//         break; // duplicate found, break inner loop
//       }
//       seen.add(str[j]);
//       maxLength = Math.max(maxLength, j - i + 1);
//     }
//   }

//   return maxLength;
// }

// console.log(longWithoutRepeats("abcabcbb"));

//Optmized Sliding window
// function longWithoutRepeats(str) {
//   let windowStart = 0;
//   let maxLength = 0;
//   const uniqueEle = new Map();

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const endChar = str[windowEnd];
//     if (uniqueEle.has(endChar)) {
//       // Move the windowStart to the right of the last occurrence of endChar
//       windowStart = Math.max(windowStart, uniqueEle.get(endChar) + 1);
//     }
//     uniqueEle.set(endChar, windowEnd); // Update the last index of the current character
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }

// console.log(longWithoutRepeats("abcabcbb"));

//---------------------------------------------------------------------
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba")

// var checkInclusion = function (s1, s2) {
//   const text = new Map();

//   for (let i = 0; i < s1.length; i++) {
//     text.set(s1[i], (text.get(s1[i]) || 0) + 1);
//   }

//   for (let i = 0; i <= s2.length - s1.length; i++) {
//     const arrang = new Map(text);
//     let match = true;

//     for (let j = i; j < i + s1.length; j++) {
//       if (arrang.has(s2[j])) {
//         let count = arrang.get(s2[j]) - 1;
//         if (count === 0) {
//           arrang.delete(s2[j]);
//         } else {
//           arrang.set(s2[j], count);
//         }
//       } else {
//         match = false;
//         break;
//       }
//     }

//     if (match && arrang.size === 0) return true;
//   }

//   return false;
// };

// console.log(checkInclusion("ab", "eidbaooo")); // true
