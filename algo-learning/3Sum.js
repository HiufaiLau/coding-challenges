function findSumOfThree(nums, target) {
  // Sort the input list
  nums.sort((a, b) => {
    return a - b;
  });

  // Fix one integer at a time and find the other two
  for (let i = 0; i < nums.length - 2; i++) {
    // Initialize the two pointers
    let low = i + 1;
    let high = nums.length - 1;

    // Traverse the list to find the triplet whose sum equals the target
    while (low < high) {
      let triple = nums[i] + nums[low] + nums[high];

      // The sum of the triplet equals the target
      if (triple == target) {
        return true;
      }

      // The sum of the triplet is less than target, so move the low pointer forward
      else if (triple < target) low++;
      // The sum of the triplet is greater than target, so move the high pointer backward
      else high--;
    }
  }

  // No such triplet found whose sum equals the given target
  return false;
}

// Driver code
function main() {
  let numsLists = [
    [3, 7, 1, 2, 8, 4, 5],
    [-1, 2, 1, -4, 5, -3],
    [2, 3, 4, 1, 7, 9],
    [1, -1, 0],
    [2, 4, 2, 7, 6, 3, 1]
  ];

  let testLists = [10, 7, 20, -1, 8];

  numsLists.map((numList, i) => {
    console.log(i + 1 + ".\tInput array:", numsLists[i]);

    if (findSumOfThree(numsLists[i], testLists[i]))
      console.log("\tSum for", testLists[i], "exists");
    else console.log("\tSum for", testLists[i], "does not exist");

    console.log("-".repeat(100));
  });
}

main();
