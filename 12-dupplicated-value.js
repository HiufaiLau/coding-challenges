const arry = [1, 2, 1, 3, 4, 3, 5];

let duplicatedValues = [];

// Find duplicates in an array
for (let i = 0; i < arry.length; i++) {
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[i] === arry[j]) {
      duplicatedValues.push(arry[i]);
    }
  }
}

// Option 2:
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) !== index);
}

// remove duplicated values from array
// Option 1:
function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr));

// Option 2:
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Option 3:
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arry));
