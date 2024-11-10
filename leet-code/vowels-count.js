// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

function vowels(str) {
  // g is the global flag
  // g ensures that every instance in the string is matched,
  // not just the first one.

  // i is for case insensitivity, so regarless uppercase or lowercase
  const matches = str.match(/[aeiou]/gi);
  console.log(matches);

  return matches ? matches.length : 0;
}

console.log(vowels("Hello?"));

function vowels2(str) {
  const vowelCheck = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let char of str) {
    if (vowelCheck.includes(char)) count++;
  }
  return count;
}
console.log(vowels2("Hello?"));
