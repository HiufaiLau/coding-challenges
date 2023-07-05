/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
Example
ar = [1,2,1,2,1,3,2]
count = 2;
There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns
int: the number of pairs
*/

//(Best) should be  in O(n) time
function sockMerchant(n, ar) {
  // Write your code here
  n = 0;
  const obj = {};
  ar.forEach((i) => {
    if (obj[i]) {
      n += 1;
      obj[i] = 0;
    } else {
      obj[i] = 1;
    }
  });
  return n;
}

function sockMerchant(n, ar) {
  // Write your code here
  // the array is not sorted
  /*
   * let use hash table(hash map) to keep track of our values and their occurrance
   * create a set from the array to get unique values
   * the set values will be use as keys and it occurance as values
   * then we divid the occurances by 2 and floor the values when needed
   * then sum the number of pairs
   */

  let keySet = new Set(ar);
  let socksOccurance = new Map();
  let count = 0;
  keySet.forEach((item) => {
    let n = 0;
    ar.forEach((element) => {
      if (item === element) {
        n++;
      }
    });
    socksOccurance.set(item, n);
  });
  socksOccurance.forEach((value, key) => {
    if (Math.floor(value / 2) >= 1) {
      count = count + Math.floor(value / 2);
    }
  });

  console.log(count);
  return count;
}
