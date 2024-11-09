// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(charMap)) {
    console.log(Object);

    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  //   return charMap
  return maxChar;
}
maxChar1("abcccccccd");

function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (let key in charMap) {
    console.log(Object);
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  //   return charMap
  return maxChar;
}
maxChar2("abcccccccd");

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    // charMap[char] = ++charMap[char] || 1;
  }

  // loop through objects
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}
maxChar("apple 1231111");
