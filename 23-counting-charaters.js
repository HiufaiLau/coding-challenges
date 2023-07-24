// Try to write a function that takes a string
// and return the number of each letter used in it,
// without counting the space character.

// counting letters in a string
// and display the most frequent letter and its count
function countLetters3(str) {
  let strArr = str.replace(/\s/g, "").toLowerCase();

  let letterObj = {};

  max = 0;
  maxChar = "";

  for (let letter of strArr) {
    letterObj[letter] = ++letterObj[letter] || 1;
    // letterObj[letter] = letterObj[letter] +1 || 1;
  }

  for (let char in letterObj) {
    if (letterObj[char] > max) {
      max = letterObj[char];
      maxChar = char;
      console.log("2" + letterObj);
    }
  }

  return `${maxChar} counted ${max} times`;
  console.log(letterObj);
}

// counting letters in a string -1
function countLetters(str) {
  let strArr = str.split("");
  let letters = {};
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== " ") {
      if (letters[strArr[i]]) {
        letters[strArr[i]] += 1;
      } else {
        letters[strArr[i]] = 1;
      }
    }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));

// counting letters in a string -2
function countLetters2(str) {
  let strArr = str.split("");
  let letters = {};
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== " ") {
      letters[strArr[i]] = letters[strArr[i]] ? letters[strArr[i]] + 1 : 1;
    }
  }
  return letters;
}

// counting letters in a string -3
function countLetters3(str) {
  let strArr = str.replace(/\s/g, "").toLowerCase();

  let letterObj = {};

  for (let letter of strArr) {
    letterObj[letter] = ++letterObj[letter] || 1;
    // letterObj[letter] = letterObj[letter] +1 || 1;
  }

  return letterObj;
}

console.log(countLetters3("lighthouse in the house"));

// function that return maximum occurring character
function getMaxOccurringChar(str) {
  // create map to store frequency of every character
  let mp = new Map();

  // to store length of string
  let n = str.length;

  // to store answer
  let ans;

  // to check count of answer character is less or greater
  // than another elements count
  let cnt = 0;

  // traverse the string
  for (let i = 0; i < n; i++) {
    // push element into map and increase its frequency
    mp.set(str[i], (mp.get(str[i]) || 0) + 1);

    // update answer and count
    if (cnt < mp.get(str[i])) {
      ans = str[i];
      cnt = mp.get(str[i]);
    }
  }

  return ans;
}

// Driver Code
let str = "lighthouse in the house";
console.log("Max occurring character is: " + getMaxOccurringChar(str));
