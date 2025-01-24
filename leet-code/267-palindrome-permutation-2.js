// Given a string s, return all the palindromic permutations (without duplicates) of it.

// You may return the answer in any order. If s has no palindromic permutation, return an empty list.

// Example 1:

// Input: s = "aabb"
// Output: ["abba","baab"]
// Example 2:

// Input: s = "abc"
// Output: []

// Constraints:

// 1 <= s.length <= 16
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {string[]}
 */
function generatePalindromicPermutations(s) {
  const charCount = new Map();

  // Step 1: Count character frequencies
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Step 2: Check if more than one character has an odd frequency
  let oddChar = "";
  const half = [];
  for (const [char, count] of charCount.entries()) {
    if (count % 2 !== 0) {
      if (oddChar) return []; // More than one odd frequency, no palindromic permutation
      oddChar = char;
    }
    // Add half of each character's count to the half array
    for (let i = 0; i < Math.floor(count / 2); i++) {
      half.push(char);
    }
  }

  // Step 3: Generate unique permutations of the half
  const halfPermutations = [];
  generateUniquePermutations(half, 0, halfPermutations);

  // Step 4: Build full palindromic permutations using two pointers
  const palindromicPermutations = halfPermutations.map((halfPerm) => {
    const result = Array(s.length);
    let left = 0,
      right = s.length - 1;

    // Place each character from halfPerm at mirrored positions
    for (const char of halfPerm) {
      result[left++] = char;
      result[right--] = char;
    }

    // If there's an odd character, place it in the middle
    if (oddChar) {
      result[Math.floor(s.length / 2)] = oddChar;
    }

    return result.join("");
  });

  return [...new Set(palindromicPermutations)]; // Remove duplicates if any
}

// Helper function to generate all unique permutations of an array
function generateUniquePermutations(arr, start, results) {
  if (start === arr.length) {
    results.push([...arr]);
    return;
  }

  const seen = new Set();
  for (let i = start; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
      generateUniquePermutations(arr, start + 1, results);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
    }
  }
}
// Example cases
console.log(generatePalindromicPermutations("aabb")); // ["abba", "baab"]
console.log(generatePalindromicPermutations("abc")); // []
console.log(generatePalindromicPermutations("carerac")); // ["racecar", "rcaearc", ...]

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  if (s.length === 1) return [s];
  // Check if palindrome is possible for given string
  // If more than more character has odd occurrences, then the given string cannot have palindrome.
  const charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap.has(char) === false) charMap.set(char, 0);
    let count = charMap.get(char);
    count += 1;
    charMap.set(char, count);
  }
  if (isPalindromePossible(charMap) === false) return [];
  const palindromes = [];
  const chars = Array.from(charMap.keys());
  const oddChar = findOddChar(charMap);
  let st = "";
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const count = charMap.get(char);
    if (count <= 1) continue;
    const halfCount = Math.floor(count / 2);
    for (let j = 0; j < halfCount; j++) st += char;
  }
  const map = new Map();
  function backtrack(st, currentIndex, partialSolution, visited) {
    if (partialSolution.length === st.length) {
      const firstHalf = partialSolution.join("");
      if (map.has(firstHalf) === true) return;
      map.set(firstHalf, true);
      const secondHalf = reverse(firstHalf);
      if (oddChar !== null) {
        palindromes.push(firstHalf + oddChar + secondHalf);
      } else {
        palindromes.push(firstHalf + secondHalf);
      }
      return;
    }
    let index = currentIndex,
      count = 0;
    while (count < st.length) {
      if (index >= st.length) index = 0;
      if (visited[index] === true) {
        count++;
        index++;
        continue;
      }
      partialSolution.push(st[index]);
      visited[index] = true;
      backtrack(st, index + 1, [...partialSolution], copy(visited));
      partialSolution.pop();
      visited[index] = false;
      index++;
      count++;
    }
  }

  for (let i = 0; i < st.length; i++) {
    backtrack(st, i, [], {});
  }

  return palindromes;
};

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isPalindromePossible(map) {
  if (map.size === 0) return false;
  let oddOccurenceCount = 0;
  const chars = Array.from(map.keys());
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const count = map.get(char);
    if (isOdd(count)) {
      if (oddOccurenceCount === 1) return false;
      oddOccurenceCount++;
    }
  }
  return true;
}

function findOddChar(map) {
  const chars = Array.from(map.keys());
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const count = map.get(char);
    if (isOdd(count)) return char;
  }
  return null;
}

function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) reversedStr += str[i];
  return reversedStr;
}
function isOdd(num) {
  return num % 2 !== 0;
}
// Example cases
console.log(generatePalindromes("aabb")); // ["abba", "baab"]
console.log(generatePalindromes("abc")); // []
console.log(generatePalindromes("carerac")); // ["racecar", "rcaearc", ...]
