// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    let endIndex = 0;
    const window = new Set();
    let maxLength = 0;

    while (endIndex < s.length) {
        if (!window.has(s[endIndex])) {
            window.add(s[endIndex]);
            maxLength = Math.max(maxLength, endIndex - startIndex + 1);
            endIndex++;
        } else {
            window.delete(s[startIndex]);
            startIndex++;
        }
        console.log(window.values())
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))