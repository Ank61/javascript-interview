// Input: = "IceCreAm"
// Output: "AceCreIm"
// var reverseVowels = function (s) {
//     const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     const stackVowel = [];
//     for (let i = 0; i <= s.length; i++) {
//         if (vowels.includes(s[i])) {
//             stackVowel.push(s[i]);
//         }
//     };
//     let str = "";
//     for (let i = 0; i <s.length; i++) {
//         if (vowels.includes(s[i])) {
//             const vowelcheck = stackVowel.pop();
//             str = str + vowelcheck;
//         }
//         else {
//             str = str + s[i]
//         }
//     }
//     return str
// };

// const reverse = reverseVowels("IceCreAm");
// console.log(reverse)// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

//-------------------------------------------------------------------------------------------

// var mergeAlternately = function (word1, word2) {
//   let finalString = "";
//   let minLength = Math.min(word1.length, word2.length);

//   for (let i = 0; i < minLength; i++) {
//     finalString += word1[i] + word2[i];
//   }

//   if (word1.length > minLength) {
//     finalString += word1.slice(minLength);
//   }
//   if (word2.length > minLength) {
//     finalString += word2.slice(minLength);
//   }

//   return finalString;
// };

//-------------------------------------------------------------------------------------------

// // var isSubsequence = function (s, t) {
// //   let pos = 0;
// //   for (let i = 0; i < t.length; t++) {
// //     console.log(s[pos], t[i]);
// //     if (s[pos] == t[i]) {
// //       pos++;
// //     }
// //   }
// //   return pos === s.length ? true : false;
// // };

// console.log(isSubsequence("abc", "ahbgdc"));

//EXAMPLE :
// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// var reverseWords = function (s) {
//     let strArr = [];
//     let i = 0;

//     while (i < s.length) {
//         while (i < s.length && s[i] === " ") {
//             i++;
//         }

//         let j = i;
//         while (j < s.length && s[j] !== " ") {
//             j++;
//         }
//         if (i < j) {
//             strArr.push(s.substring(i, j));
//             i = j;
//         }
//     }

//     return strArr.reverse().join(" ");
// };

// const reverse = reverseWords("the sky is blue");
// console.log(reverse);

//-------------------------------------------------------------------------------------------
// var compress = function(chars) {
//   let writeIndex = 0; // Position to write the compressed characters
//   let readIndex = 0;  // Position to read the original characters

//   while (readIndex < chars.length) {
//     let char = chars[readIndex];
//     let count = 0;

//     // Count the number of occurrences of the current character
//     while (readIndex < chars.length && chars[readIndex] === char) {
//       readIndex++;
//       count++;
//     }

//     // Write the character
//     chars[writeIndex] = char;
//     writeIndex++;

//     // Write the count if more than 1
//     if (count > 1) {
//       let countStr = count.toString();
//       for (let c of countStr) {
//         chars[writeIndex] = c;
//         writeIndex++;
//       }
//     }
//   }

//   // Resize the array to the new length
//   chars.length = writeIndex;

//   return writeIndex; // Return the length of the compressed array
// };

// const reverse = compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
// console.log(reverse);

//-------------------------------------------------------------------------------------------
// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// var gcdOfStrings = function (str1, str2) {
//   let smallStr = str1.length > str2.length ? str2 : str1;
//   let largeStr = str1.length > str2.length ? str1 : str2;
//   let largestDiv = "";
//   let i = 0;
//   let j = 0;
//   while (j < smallStr.length) {
//     while (i < largeStr.length) {
//       if (str1[i] === str2[j]) {
//         largestDiv = largestDiv + str2[j]
//         i++;
//         j++;
//       }
//       else {
//         i++
//       }
//     }
//     j++;
//   }
//   return largestDiv;
// };

// var gcdOfStrings = function (str1, str2) {
//   if (str1 + str2 !== str2 + str1) {
//     return ""
//   }

//   let minLen = Math.min(str1.length, str2.length);
//   for (let i = minLen; i > 0; i--) {
//     if ((str1.length % i === 0) && (str2.length % i === 0)) {
//       return str1.substring(0, i);
//     }
//   }
// };

// Example usage
// const result = gcdOfStrings("ABABAB", "ABAB");
// console.log(result); // Output: "AB"

// function firstLetter(str) {
//   let firstLetter = false;
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     if (firstLetter || i == 0) {
//       console.log(str[i])
//       output = output + str[i].toUpperCase();
//       firstLetter = false;
//     }
//     else if (str[i] === " ") {
//       firstLetter = true;
//       output = output + str[i];
//     }
//     else {
//       firstLetter = false;
//       output = output + str[i].toLowerCase()
//     }
//   }
//   return output;
// }

// console.log(firstLetter("my name hello ankit"))


//------------------------------------------------------------------------------------------------------------

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// var strStr = function (haystack, needle) {
//   let hayIndex = 0;
//   let needleIndex = 0;

//   while ((hayIndex < haystack.length) && (needleIndex < needle.length)) {
//     if (needle[needleIndex] === haystack[hayIndex]) {
//       hayIndex++;
//       needleIndex++;
//     }
//     else {
//       needleIndex = 0;
//       hayIndex++;
//     }
//   }
//   if (hayIndex === haystack.length) {
//     return -1;
//   }
//   else {
//     const max = Math.max(needle.length, hayIndex);
//     const min = Math.min(needle.length, hayIndex);
//     return max - min
//   }
// };


// var strStr = function (haystack, needle) {
//   if (needle === "") return 0; // Edge case: Empty needle
//   if (needle.length > haystack.length) return -1; // Edge case: Needle is longer than haystack

//   let hayIndex = 0;
//   let needleIndex = 0;
//   let startIndex = -1; // Track where the match starts

//   while (hayIndex < haystack.length) {
//     if (haystack[hayIndex] === needle[needleIndex]) {
//       if (startIndex === -1) startIndex = hayIndex; // Mark the start of the match
//       needleIndex++;
//       if (needleIndex === needle.length) return startIndex; // Full match found
//     } else {
//       if (startIndex !== -1) {
//         hayIndex = startIndex; // Reset hayIndex to restart match
//       }
//       needleIndex = 0;
//       startIndex = -1;
//     }
//     hayIndex++;
//   }

//   return -1; // No match found
// };
// console.log(strStr("hello", "ll"))


//---------------------------------------------------------------------------------------------

// Input: s = "(()())(())"
// Output: "()()()"
//Count the primitive '(' and push until there is 0
// var removeOuterParentheses = function(s) {
//     let result = "";
//     let openCount = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             if (openCount > 0) result += '(';
//             openCount++;
//         } else {
//             openCount--;
//             if (openCount > 0) result += ')';
//         }
//     }

//     return result;
// };

// console.log(removeOuterParentheses("(())"))

//---------------------------------------------------------------------------------------------

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// var reverseWords = function (s) {
//     let str = "";
//     let firstLetterHit = false;
//     for (let j = 0; j < s.length; j++) {
//         if (firstLetterHit) {
//             str = str + s[j];
//         }
//         else {
//             if (!firstLetterHit && str.length == 0) {
//                 if (s[j] !== " ") {
//                     firstLetterHit = true;
//                     str = str + s[j];
//                 }
//             }
//         }
//     }

//     console.log("....", str)
//     const arr = [];
//     let finalOut = "";
//     let output = "";
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== " ") {
//             output = output + s[i];
//             if (i === s.length - 1) {
//                 arr.push(output)
//             }
//         }
//         else {
//             arr.push(output)
//             output = ""
//         }
//     }
//     const num = arr.length
//     for (let i = 0; i < num; i++) {
//         finalOut = finalOut + arr.pop() + (i === num - 1 ? "" : " ");
//     }
//     return finalOut
// };


// var reverseWords = function(s) {
//     let result = "";  // Final output string
//     let word = "";    // Temporary word storage
//     let i = s.length - 1; 

//     while (i >= 0) {
//         if (s[i] !== " ") {
//             //Adding form behind
//             word = s[i] + word; // Build the word
//             console.log(word)
//         } else if (word.length > 0) {
//             //" "
//             if (result.length > 0) result += " "; // Add space before the next word
//             result += word;
//             word = ""; // Reset word storage
//         }
//         i--;
//     }

//     // Add last word if it exists (handling edge cases)
//     if (word.length > 0) {
//         if (result.length > 0) result += " ";
//         result += word;
//     }

//     return result;
// };
console.log(reverseWords("   the sky is blue"))