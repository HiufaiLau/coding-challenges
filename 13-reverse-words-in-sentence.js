// function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
var x = "This is an example!";

function reverseWords(str) {
  var splitStr = str.split(" ");
  var reverseArr = splitStr.map(function (word) {
    return word.split("").reverse().join("");
  });
  return reverseArr.join(" ");
}

console.log(reverseWords(x));

//(Best) Option 2:
function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
console.log(reverseWords(x));

// Option 3:
function reverseWords(str) {
  return str
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}
console.log(reverseWords(x));

// Option 4:
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWords(x));

// Option 5:
function reverseWords(str) {
  let reversedWord = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + " ";
      reversedWord = "";
    }
  }
  return reversedStr + reversedWord;
}
console.log(reverseWords(x));
