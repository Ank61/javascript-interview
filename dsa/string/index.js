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

// var mergeAlternately = function(word1, word2) {
//     let finalString = "";
//     let minLength = Math.min(word1.length, word2.length);

//     for (let i = 0; i < minLength; i++) {
//         finalString += word1[i] + word2[i];
//     }

//     if (word1.length > minLength) {
//         finalString += word1.slice(minLength);
//     }
//     if (word2.length > minLength) {
//         finalString += word2.slice(minLength);
//     }

//     return finalString;
// };

var isSubsequence = function (s, t) {
  let pos = 0;
  for (let i = 0; i < t.length; t++) {
    console.log(s[pos], t[i]);
    if (s[pos] == t[i]) {
      pos++;
    }
  }
  return pos === s.length ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc"));

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