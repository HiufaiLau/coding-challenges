// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

let str1 = "coding money";
let str2 = "money coding";

let noSpaceStr1 = str1.replace(/\s/g, ""); // "codingmoney"
let noSpaceStr2 = str2.replace(/\s/g, ""); // "moneycoding"

let noSpaceStr7 = str1.split(" ").join(""); // "codingmoney"
let noSpaceStr8 = str2.split(" ").join(""); // "moneycoding
console.log(noSpaceStr1); // Output: "codingmoney"
console.log(noSpaceStr2); // Output: "moneycoding"

let noSpaceStr3 = Array.from(str1)
  .filter((char) => char !== " ")
  .join("");
let noSpaceStr4 = Array.from(str2)
  .filter((char) => char !== " ")
  .join("");

function removeSpaces(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}

let noSpaceStr5 = str1.replaceAll(" ", ""); // "codingmoney"
let noSpaceStr6 = str2.replaceAll(" ", ""); // "moneycoding"

console.log(removeSpaces(str1)); // Output: "codingmoney"
console.log(removeSpaces(str2));

console.log(noSpaceStr1); // Output: "codingmoney"
console.log(noSpaceStr2);
console.log(noSpaceStr3); // Output: "codingmoney"
console.log(noSpaceStr4);

function charMap(str) {
  const cahrMap = {};
  str = str.toUpperCase().replace(/[^\w]/g, "");
  console.log(str);

  for (let char in str) {
    cahrMap[char] = ++cahrMap[char] || 1;
  }
  return cahrMap;
}

function anagram(strA, strB) {
  // step1: Build Char Map - Empty Object for strA
  const charMapA = charMap(strA);

  console.log(charMapA);

  // step2: Build Char Map - Empty Object for strB
  const charMapB = charMap(strB);

  console.log(charMapB);
  // step3: Compare each character in the both Char Map

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

console.log(anagram("code money", "money coding"));
