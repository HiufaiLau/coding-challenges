// find-the-second-largest number in array
var arry = [1, 2, 1, 3, 4, 3, 5];

function secondLargest(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return b - a;
  });
  return sortedArr[1];
}
console.log(secondLargest(arry));
