function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  // Iterate through the array
  for (let pivot = 0; pivot < n; pivot++) {
    // If the current number is greater than 0, break the loop (no valid triplets possible)
    if (nums[pivot] > 0) {
      break;
    }
    // Skip duplicate values for the pivot
    if (pivot > 0 && nums[pivot] === nums[pivot - 1]) {
      continue;
    }

    // Use two-pointer technique
    let low = pivot + 1,
      high = n - 1;
    while (low < high) {
      const total = nums[pivot] + nums[low] + nums[high];
      if (total < 0) {
        low++;
      } else if (total > 0) {
        high--;
      } else {
        // Found a triplet
        result.push([nums[pivot], nums[low], nums[high]]);
        low++;
        high--;
        // Skip duplicates for low and high pointers
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high--;
        }
      }
    }
  }

  return result;
}

export { threeSum };

// Driver code
function main() {
  const testCases = [
    // Test Case 1: Basic case
    [-1, 0, 1, 2, -1, -4],
    // Test Case 2: No valid triplets
    [1, 2, 3, 4, 5],
    // Test Case 3: All zeros
    [0, 0, 0, 0],
    // Test Case 4: Mixed numbers with duplicates
    [-4, -1, -1, 0, 1, 2, 2],
    // Test Case 5: Large negative and positive range
    [-10, -7, -3, -1, 0, 3, 7, 10],
    // Test Case 6: All negative
    [-3, -5, -7, -9]
  ];

  testCases.forEach((nums, idx) => {
    console.log(`\nTest Case ${idx + 1}:\n\tInput: [${nums.join(", ")}]`);
    const result = threeSum(nums);
    console.log(
      `\tOutput: [${result
        .map((triplet) => `[${triplet.join(", ")}]`)
        .join(", ")}]`
    );
    console.log("-".repeat(100));
  });
}

main();

// function findSumOfThree(nums, target) {
//   // Sort the input list
//   nums.sort((a, b) => {
//     return a - b;
//   });

//   // Fix one integer at a time and find the other two
//   for (let i = 0; i < nums.length - 2; i++) {
//     // Initialize the two pointers
//     let low = i + 1;
//     let high = nums.length - 1;

//     // Traverse the list to find the triplet whose sum equals the target
//     while (low < high) {
//       let triple = nums[i] + nums[low] + nums[high];

//       // The sum of the triplet equals the target
//       if (triple == target) {
//         return true;
//       }

//       // The sum of the triplet is less than target, so move the low pointer forward
//       else if (triple < target) low++;
//       // The sum of the triplet is greater than target, so move the high pointer backward
//       else high--;
//     }
//   }

//   // No such triplet found whose sum equals the given target
//   return false;
// }

// // Driver code
// function main() {
//   let numsLists = [
//     [3, 7, 1, 2, 8, 4, 5],
//     [-1, 2, 1, -4, 5, -3],
//     [2, 3, 4, 1, 7, 9],
//     [1, -1, 0],
//     [2, 4, 2, 7, 6, 3, 1]
//   ];

//   let testLists = [10, 7, 20, -1, 8];

//   numsLists.map((numList, i) => {
//     console.log(i + 1 + ".\tInput array:", numsLists[i]);

//     if (findSumOfThree(numsLists[i], testLists[i]))
//       console.log("\tSum for", testLists[i], "exists");
//     else console.log("\tSum for", testLists[i], "does not exist");

//     console.log("-".repeat(100));
//   });
// }

// main();
