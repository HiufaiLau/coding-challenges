// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example 1:

// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".
// Example 2:

// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".
// Example 3:

// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.

function makeFancyString(s) {
  let result = "";
  let count = 1; // Start with 1 for the first character

  for (let i = 0; i < s.length; i++) {
    // If it's the first character or it's different from the previous one
    if (i === 0 || s[i] !== s[i - 1]) {
      count = 1; // Reset the count for a new character
    } else {
      count++; // Increment count if it's the same as the previous character
    }

    // Add the character if it does not exceed two consecutive occurrences
    if (count <= 2) {
      result += s[i];
    }
  }

  return result;
}

function makeFancyString(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If result has fewer than 2 characters or the last two characters are not the same as the current character
    if (
      result.length < 2 ||
      !(
        result[result.length - 1] === char && result[result.length - 2] === char
      )
    ) {
      result.push(char);
    }
  }

  // Join the result array into a string and return it
  return result.join("");
}

console.log(makeFancyString("leeetcode")); // Output: "leetcode"
console.log(makeFancyString("aaabaaaa")); // Output: "aabaa"
console.log(makeFancyString("aab")); // Output: "aab"
