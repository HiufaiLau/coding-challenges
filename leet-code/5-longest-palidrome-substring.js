// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 1;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // Odd-length palindromes
    expandAroundCenter(i, i + 1); // Even-length palindromes
  }

  return s.slice(start, start + maxLength);
};

//-------------------------------------------------------------------------------

function longestPalindrome(s) {
  if (s.length <= 1) return s;

  let maxPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    // Expand around the center for odd-length palindromes
    let odd = expandAroundCenter(s, i, i);
    // Expand around the center for even-length palindromes
    let even = expandAroundCenter(s, i, i + 1);

    // Choose the longer palindrome
    maxPalindrome = odd.length > maxPalindrome.length ? odd : maxPalindrome;
    maxPalindrome = even.length > maxPalindrome.length ? even : maxPalindrome;
  }

  return maxPalindrome;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

// Example usage:
console.log(longestPalindrome("babadadada")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"

//-------------------------------------------------------------------

function shortestPalindrome(s) {
  const rev = s.split("").reverse().join("");
  const newString = s + "#" + rev; // Create a new string with a special character to prevent overlap
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
