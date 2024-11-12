// Given a string s, return true if a permutation of the string could form a
// palindrome
//  and false otherwise.

// Example 1:

// Input: s = "code"
// Output: false
// Example 2:

// Input: s = "aab"
// Output: true
// Example 3:

// Input: s = "carerac"
// Output: true

// Constraints:

// 1 <= s.length <= 5000
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  function canPermutePalindrome(s) {
    const charSet = new Set();

    for (const char of s) {
      if (charSet.has(char)) {
        charSet.delete(char);
        console.log(charSet);
      } else {
        charSet.add(char);
        console.log(charSet);
      }
    }

    // A palindrome permutation is possible if at most one character has an odd count.
    return charSet.size <= 1;
  }

  //   console.log(canPermutePalindrome("code")); // false
  //   console.log(canPermutePalindrome("aab")); // true
  //   console.log(canPermutePalindrome("carerac")); // true
};

//----------------------------------------------------------
function canPermutePalindrome2(s) {
  const charCount = new Map();

  // Count each character's frequency
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
    console.log(charCount);
  }

  // Count the number of characters with odd frequencies
  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
      console.log(oddCount);
    }
  }

  // A palindrome can have at most one odd frequency character
  return oddCount <= 1;
}

// Example cases
console.log(canPermutePalindrome2("code")); // Output: false
console.log(canPermutePalindrome2("aab")); // Output: true
console.log(canPermutePalindrome2("carerac")); // Output: true
