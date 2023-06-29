// created a dummy array (returnString)
// Split the input string into individual words
// Wrote a ‘for loop’
// Each individual word is accessed
// each word, treated as an array, has the element at index ‘0’ capitalized, and then the rest of the word added starting from index ‘1’, is pushed into dummy array
// return the dummy array as a string joined with a space

function capitalizeEveryWord() {
  var returnString = [];
  var words = this.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    returnString.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnString.join(' ');
}
capitalizeEveryWord('you are a nice dude.');

//(best) instead of using a ‘for loop’ they are using the ‘.map’ function
function capitalizeEveryWord() {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

//(good)
function capitalizeEveryWord() {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

//(good) Use regEx to find the first alpha-numeric element following a space
// - capitalize it.
function capitalizeEveryWord() {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
}
