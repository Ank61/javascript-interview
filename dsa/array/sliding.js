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

var longestOnes = function (nums, k) {
  let longest = 0;
  let flip = k;
  let startIndex = 0;
  let endIndex = 0;

  while (endIndex < nums.length) {
    if (nums[endIndex] === 0) {
      flip--;
    }

    // execute only when there is flip is exhasted
    while (flip < 0) {
      //Restoring k which were lost
      if (nums[startIndex] === 0) {
        flip++;
      }
      startIndex++;
    }

    longest = Math.max(longest, endIndex - startIndex + 1);
    endIndex++;
  }

  return longest;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
