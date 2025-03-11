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
// // console.log(reverseWords("   the sky is blue"))

//-------------------------------------------------------------------

// Hello World => olleH dlroW

// function reverseText(str){
//     str = str+ " ";
//     let output = "";
//     let stri = "";
//     for(let i=0 ; i<str.length; i++){
//         if(str[i]!==" "){
//             stri =  str[i] + stri;
//         }
//         else{
//             output  = output + " " +stri;
//             stri = ""
//         }
//     }
//     return output;
// }
// console.log(reverseText("Hello World"))

//-------------------------------------------------------------------
//Two strings s and t are isomorphic if the characters in s
// can be replaced to get t.

//Input: s = "egg", t = "add"
// Output: true
// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// function isomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let convertedText = "";
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!map.has(s[i])) {
//       map.set(s[i], 1);
//     } else {
//       let count = map.get(s[i]);
//       map.delete(s[i]);
//       map.set(s[i], count + 1);
//     }
//   }
//   const map2 = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!map2.has(t[i])) {
//       map2.set(t[i], 1);
//     } else {
//       let count = map2.get(t[i]);
//       map2.delete(t[i]);
//       map2.set(t[i], count + 1);
//     }
//   }
//   console.log(map);
//   console.log(map2);
//   if (map.size !== map2.size) {
//     return false;
//   }
//   map.forEach((value, key) => {
//     map2.forEach((value2, key2) => {
//       if (value !== value2) {
//         return false;
//       }
//       else{
//         map2.delete(key2);
//         map.delete(key);
//       }
//     });
//   });
//   return true;
// }


// var isIsomorphic = function(s, t) {
//     // Early exit if lengths differ.
//     if (s.length !== t.length) return false;

//     const mapST = new Map(); // Map from s -> t
//     const mapTS = new Map(); // Map from t -> s

//     for (let i = 0; i < s.length; i++) {
//       const charS = s[i];
//       const charT = t[i];

//       // Check mapping from s to t.
//       if (mapST.has(charS)) {
//         if (mapST.get(charS) !== charT) return false;
//       } else {
//         mapST.set(charS, charT);
//       }

//       // Check mapping from t to s.
//       if (mapTS.has(charT)) {
//         if (mapTS.get(charT) !== charS) return false;
//       } else {
//         mapTS.set(charT, charS);
//       }
//     }

//     return true;
//   };

//   // Example usage:
//   console.log(isIsomorphic("egg", "add")); // true
//   console.log(isIsomorphic("foo", "bar")); // false
//   console.log(isIsomorphic("paper", "title")); // true


// console.log(isomorphic("foo", "bar"));


//----------------------------------------------------------------------------------
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// var largestOddNumber = function(num) {
//     let temp = num;
//     let j=num.length;
//     while(j>0){
//         const str = parseInt(temp);
//         if(str%2!==0){
//             //odd found
//             return temp.toString();
//         }
//         else{
//             j--;
//             temp = num.slice(0,j);
//         }
//     }
//     return ""
// };
//Optimised :
// var largestOddNumber = function(num) {
//     for (let i = num.length - 1; i >= 0; i--) {
//         if (parseInt(num[i]) % 2 !== 0) {
//             return num.slice(0, i + 1);
//         }
//     }
//     return "";
// };
// console.log(largestOddNumber("52"))

//------------------------------------------------------------------------------------------

// var longestCommonPrefix = function(strs) {
//     let common = "";
//     let i = 0;
//     const firstWord = strs[0];
//     let loopBeak = false;
//     while(i<firstWord.length && !loopBeak ){
//         for(let j=1; j<strs.length ; j++){
//             if(strs[j][i]=== firstWord[i]){
//                 common =common + firstWord[i];
//                 i++;
//             }
//             else{
//                 common = common.slice(0,i-1);
//                 loopBeak = true;
//             }
//         }
//     }
//     return common
// };

// var longestCommonPrefix = function(strs) {
//     if (!strs.length) return "";

//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[j][i] !== strs[0][i]) {
//                 return strs[0].slice(0, i);
//             }
//         }
//     }
//     return strs[0];
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))

//------------------------------------------------------------------------------------------

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

// var rotateString = function (s, goal) {
//   let output = s;
//   for (let i = 0; i < s.length; i++) {
//     const rotated  = rotate(output)
//     if (rotated === goal) {
//       return true;
//     }
//     output = rotated;
//   }
//   return false
// };

// function rotate(str) {
//   let dummy = "";
//   for (let j = 1; j < str.length; j++) {
//     dummy = dummy + str[j];
//     if (j === str.length - 1) {
//       dummy = dummy + str[0];
//     }
//   }
//   return dummy;
// }
// console.log(rotateString("abcde", "abced"))

//------------------------------------------------------------------------------------------
//Input: s = "anagram", t = "nagaram"
//Output: true

// Input: s = "rat", t = "car"
// Output: false

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   const charCount = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!charCount.has(s[i])) {
//       charCount.set(s[i], 1);
//     }
//     else {
//       const count = charCount.get(s[i]);
//       charCount.delete(s[i]);
//       charCount.set(s[i], count + 1);
//     }
//   }
//   for (let char of t) {
//     if (!charCount.has(char)) return false;
//     charCount.set(char, charCount.get(char) - 1);
//     if (charCount.get(char) < 0) return false;
//   }

//   return true;
// };

// console.log(isAnagram("rat", "car"))
// var isIsomorphic = function(s, t) {
//     // Early exit if lengths differ.
//     if (s.length !== t.length) return false;

//     const mapST = new Map(); // Map from s -> t
//     const mapTS = new Map(); // Map from t -> s

//     for (let i = 0; i < s.length; i++) {
//       const charS = s[i];
//       const charT = t[i];

//       // Check mapping from s to t.
//       if (mapST.has(charS)) {
//         if (mapST.get(charS) !== charT) return false;
//       } else {
//         mapST.set(charS, charT);
//       }

//       // Check mapping from t to s.
//       if (mapTS.has(charT)) {
//         if (mapTS.get(charT) !== charS) return false;
//       } else {
//         mapTS.set(charT, charS);
//       }
//     }

//     return true;
//   };

//   // Example usage:
//   console.log(isIsomorphic("egg", "add")); // true
//   console.log(isIsomorphic("foo", "bar")); // false
//   console.log(isIsomorphic("paper", "title")); // true

// console.log(isomorphic("foo", "bar"));
//-----------------------------------------------------------------------------

// var frequencySort = function (s) {
//   let output = "";
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!map.has(s[i])) {
//       map.set(s[i], 1);
//     } else {
//       const count = map.get(s[i]);
//       map.set(s[i], count + 1);
//     }
//   }
//   let arr = new Array(...map);
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (arr[k][1] > arr[j][1]) {
//         arr = swap(arr, j, k);
//       }
//     }
//   }

//   for (let o = 0; o < arr.length; o++) {
//     for (let j = 0; j < arr[o][1]; j++) {
//       output = output + arr[o][0];
//     }
//   }
//   return output;
// };

// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }
// console.log(frequencySort("tree"));

//--------------------------------------------------------------------------------

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation:
// Digit 8 is inside of 3 nested parentheses in the string.

// var maxDepth = function (s) {
//   let countParah = 0;
//   let checkCurrent = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       checkCurrent = checkCurrent + 1;
//       if (checkCurrent > countParah) {
//         countParah = checkCurrent;
//       }
//     } else if (s[i] === ")") {
//       checkCurrent = checkCurrent - 1;
//     }
//   }
//   return countParah;
// };

// console.log(maxDepth("(1)+((2))+(((3)))"));
//---------------------------------------------------------------------------------
// Roman to Integer
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.


// var romanToInt = function (s) {
//   const objAll = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   let output = 0;
//   for (let i = 0; i < s.length; i++) {
//     const key = s[i];
//     const nextKey = s[i + 1];

//     if ((key === "I") &&
//       (nextKey === "V" || nextKey === "X")) {
//       //Subtraction Output
//       output += (objAll[nextKey] - objAll[key]);
//       i = i + 1;

//     }
//     else if ((key === "C") &&
//       (nextKey === "D" || nextKey === "M")) {
//       output += (objAll[nextKey] - objAll[key]);
//       i = i + 1;
//     }
//     else if ((key === "X") &&
//       (nextKey === "L" || nextKey === "C")) {
//       output += (objAll[nextKey] - objAll[key]);
//       i = i + 1;
//     }
//     else {
//       //simply Add by default
//       output += objAll[key];
//     }

//   }
//   return output;
// };

// console.log(romanToInt("MCMXCIV"))


//---------------------------------------------------------------------------------
// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

// Input: s = "42"
// Output: 42

// var myAtoi = function (s) {
//   let numberFound = false;
//   let sign = 1;
//   let output = "";
//   const INT_MAX = 2147483647;
//   const INT_MIN = -2147483648;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " " && output === "" && !numberFound) {
//       continue;
//     }
//     if (output === "" && !numberFound && (s[i] === '-' || s[i] === '+')) {
//       sign = (s[i] === '-') ? -1 : 1;
//       numberFound = true;
//       continue;
//     }
//     if (s[i].match(/[0-9]/)) {
//       numberFound = true;
//       output += s[i];
//     } else {
//       break;
//     }
//   }

//   let result = output === "" ? 0 : sign * parseInt(output, 10);

//   if (result > INT_MAX) return INT_MAX;
//   if (result < INT_MIN) return INT_MIN;

//   return result;
// };
// console.log(myAtoi("0-1"))
// console.log(myAtoi(" -042"))
// console.log(myAtoi("1337c0d3"))
// console.log(myAtoi("words and 987"))
//----------------------------------------------------------------------------------------------
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// var reverseWords = function (s) {
//   let output = "";
//   let reverse = "";
//   let letterTouched = false;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       letterTouched = true;
//       reverse = reverse + s[i];
//       if (i === s.length - 1) {
//         output = reverse + " " + output;
//       }
//     }
//     else {
//       if (!letterTouched) {
//         continue
//       }
//       else {
//         output = reverse + " " + output;
//         reverse = ""
//       }
//     }
//   }

//   return output
// };

// console.log(reverseWords("    hello world  "))

//------------------------------------------------------------------------------------------------

//Input: s = "aabcb"
// Output: 5
// Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

// var beautySum = function (s) {
//   let totalBeauty = 0;

//   for (let i = 0; i < s.length; i++) {
//     const map = new Map();

//     for (let j = i; j < s.length; j++) {
//       map.set(s[j], (map.get(s[j]) || 0) + 1);

//       totalBeauty += calculateBeauty(map);
//     }
//   }

//   return totalBeauty;
// };

// function calculateBeauty(map) {
//   let maxCount = 0;
//   let minCount = Infinity;

//   for (const count of map.values()) {
//     maxCount = Math.max(maxCount, count);
//     minCount = Math.min(minCount, count);
//   }

//   return maxCount - minCount;
// }

// console.log(beautySum("aabcbaa"));
// console.log(beautySum("aabcb"));

//---------------------------------------------------------------------------------------------------------

// Input: s = "aba", k = 2
// Output: 3
// Explanation: The substrings are: "ab", "ba" and "aba".


// function countSubstr(s, k) {
// const app = [];

// for(let i=0; i<=s.length; i++){
//   const substring = s.slice(i,i+k);
//     app.push(substring);
// }
// console.log(app)
// return app.length;
// }

// console.log(countSubstr("cdad",4))

//---------------------------------------------------------------------------------------------------------
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
