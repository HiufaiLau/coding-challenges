// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

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

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let result = "";
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result += word1[i];
    }

    // Add character from word2 if available
    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
};

var mergeAlternately = function (word1, word2) {
  let res = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) res += word1[i];
    if (i < word2.length) res += word2[i];
  }
  return res;
};

function mergeAlternately(word1, word2) {
  let result = "";
  let i = 0;

  // Iterate through both strings while both have characters
  while (i < word1.length || i < word2.length) {
    // Add character from word1 if available
    if (i < word1.length) {
      result += word1[i];
    }

    // Add character from word2 if available
    if (i < word2.length) {
      result += word2[i];
    }

    // Move to the next character for both strings
    i++;
  }

  return result;
}

// faster time ----------------------------------------
var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let maxLength = Math.max(word1.length, word2.length);

  while (i < maxLength) {
    if (i < word1.length) {
      result += word1[i];
    }

    // Add character from word2 if available
    if (i < word2.length) {
      result += word2[i];
    }

    i++;
  }

  return result;
};

// fastest time ----------------------------------------
var mergeAlternately = function (word1, word2) {
  let merged = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    merged += (word1[i] || "") + (word2[i] || "");
  }

  return merged;
};

// Example usage:
console.log(mergeAlternately(["a", "b"], ["c", "a", "d"]));

/** -------------------------------------------------------------------------------------------------------- */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let result = [];
let n = Math.max(word1.length, word2.length);
for (let i = 0; i < n; i++) {
  if (i < word1.length) {
    result.push(word1[i]);
  }
  if (i < word2.length) {
    result.push(word2[i]);
  }
}
return result.join("");

var mergeAlternately = function (word1, word2) {
  let newWord = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i]) newWord += word1[i];
    if (word2[i]) newWord += word2[i];
  }

  return newWord;
};

var mergeAlternately = function (word1, word2) {
  var maxLength = Math.max(word1.length, word2.length);
  var result = [];
  var index = 0;
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result.push(word1[i]);
    }
    if (i < word2.length) {
      result.push(word2[i]);
    }
  }

  return result.join("");
};

var mergeAlternately = function (word1, word2) {
  let output = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    output += word1[i];
    output += word2[j];
    i++;
    j++;
  }

  while (i < word1.length) {
    output += word1[i];
    i++;
  }

  while (j < word2.length) {
    output += word2[j];
    j++;
  }

  return output;
};

var mergeAlternately = function (word1, word2) {
  let result = "";
  while (word1.length > 0 && word2.length > 0) {
    result += word1[0];
    result += word2[0];
    word1 = word1.substring(1);
    word2 = word2.substring(1);
  }
  if (word1.length > 0) result += word1;
  if (word2.length > 0) result += word2;
  return result;
};
