// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d


var mergeAlternately = function(word1, word2) {
    let finalString = "";
    let minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        finalString += word1[i] + word2[i];
    }

    if (word1.length > minLength) {
        finalString += word1.slice(minLength);
    }
    if (word2.length > minLength) {
        finalString += word2.slice(minLength);
    }

    return finalString;
};
