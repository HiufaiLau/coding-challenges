// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 5));

function chunk(array, size) {
  const chunked = [];
  let tempArray = [];

  for (let element of array) {
    tempArray.push(element);
    // If tempArray has reached the desired chunk size, push it to chunked
    if (tempArray.length === size) {
      chunked.push(tempArray);
      tempArray = []; // Reset tempArray for the next chunk
    }
  }

  // If there are remaining elements in tempArray, push it as the last chunk
  if (tempArray.length > 0) {
    chunked.push(tempArray);
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2)); // --> [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // --> [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[1, 2, 3, 4, 5]]

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
