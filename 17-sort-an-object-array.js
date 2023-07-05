// Task
// An array of objects, , is provided for you in the editor. Complete the code below so that it sorts 's elements alphabetically by book name and then prints the sorted  object.

// Note: There is no input to be read, and there are no sample test cases.

function sortLibrary() {
  // var library is defined, use it in your code
  // use console.log(library) to output the sorted library data
  console.log(library.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)));
}

// Option 2:
function compare(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

function sortLibrary() {
  // var library is defined, use it in your code
  // use console.log(library) to output the sorted library data
  console.log(library.sort(compare));
}

// tail starts here
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    libraryID: 1254,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    libraryID: 4264,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];

sortLibrary();
