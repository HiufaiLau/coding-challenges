// Return the index of the first element in the array whose value is equal to
// the sum of all elements to the left of it. Return -1 if there is no such element.
function balanceIndex(arr) {
  // loop through each index in the array
  for (let i = 0; i < arr.length; i++) {
    // if the element at this index is a balance index
    if (isBalanceIndex(arr, i)) {
      // return this index
      return i;
    }
  }

  // we didn't find a balance index, so return -1
  return -1;
}

// Return true if the element at the given index is a balance index.
function isBalanceIndex(arr, index) {
  // sum up the elements to the left of the given index
  const leftSum = sum(arr.slice(0, index));
  // sum up the elements to the right of the given index
  const rightSum = sum(arr.slice(index + 1));
  // return true if the sums are equal
  return leftSum === rightSum;
}

// Return the sum of all the elements in the given array.
function sum(arr) {
  // reduce the array to a single sum
  return arr.reduce((acc, num) => acc + num, 0);
}

// Option 2
function findBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

// Option 3
function findBalanceIndex(arr) {
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
  return arr.findIndex(
    (val, idx) => sum(arr.slice(0, idx)) === sum(arr.slice(idx + 1))
  );
}
console.log(findBalanceIndex([1, 2, 5, 4, 3, 2, 1]));
