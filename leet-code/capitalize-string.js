// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

function capitalize(str) {
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    // Capitalize the first letter and add the rest of the word
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  // Join the words back into a single string
  return result.join(" ");
}

function capitalize(str) {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(
  capitalize("titles of books, movies, songs, plays and other works")
);
