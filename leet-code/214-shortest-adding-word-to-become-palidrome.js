// You are given a string s. You can convert s to a
// palindrome
//  by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of lowercase English letters only.

/**
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) {
  const rev = s.split("").reverse().join("");
  const newString = s + "#" + rev;
  console.log(newString);

  // Create a new string with a special character to prevent overlap
  const lps = new Array(newString.length).fill(0); // Longest prefix-suffix array

  // Build LPS array using KMP algorithm
  for (let i = 1; i < newString.length; i++) {
    let j = lps[i - 1];
    while (j > 0 && newString[i] !== newString[j]) {
      j = lps[j - 1];
    }
    if (newString[i] === newString[j]) {
      j++;
    }
    lps[i] = j;
  }

  // The length of the longest palindromic prefix
  const longestPalindromicPrefix = lps[lps.length - 1];

  // Add the reverse of the remaining suffix to the start of the string
  return rev.slice(0, rev.length - longestPalindromicPrefix) + s;
}
console.log(shortestPalindrome("aacecaaa"));
