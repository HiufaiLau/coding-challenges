// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let midx = m - 1;
  let nidx = n - 1;
  let right = m + n - 1;

  while (nidx >= 0) {
    if (midx >= 0 && nums1[midx] > nums2[nidx]) {
      nums1[right] = nums1[midx];
      midx--;
    } else {
      nums1[right] = nums2[nidx];
      nidx--;
    }
    right--;
  }
};

function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for the end of actual elements in nums1
  let j = n - 1; // Pointer for the end of nums2
  let k = m + n - 1; // Pointer for the last position in nums1

  // Merge in reverse order
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If nums2 has remaining elements, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

//---------------------------------------------------------------------------
function merge(nums1, m, nums2, n) {
  // Place nums2 elements into nums1 starting from index m
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  // Sort nums1 in-place
  nums1.sort((a, b) => a - b);
}

//-------------------------------------------------------------------------------------
function merge(nums1, m, nums2, n) {
  // Place nums2 elements into nums1 starting from index m
  let filteredNums1 = nums1.filter((i) => i !== 0);
  let filteredNums2 = nums2.filter((i) => i !== 0);

  // Sort nums1 in-place
  nums1.sort((a, b) => a - b);
}

//-----------------------------------------------------------------------------------
var merge = function (nums1, m, nums2, n) {
  let midx = m - 1;
  let nidx = n - 1;
  let right = m + n - 1;

  // Print initial state
  console.log("Initial nums1:", nums1);
  console.log("nums2:", nums2);
  console.log("--------------------");

  while (nidx >= 0) {
    if (midx >= 0 && nums1[midx] > nums2[nidx]) {
      nums1[right] = nums1[midx];
      midx--;
    } else {
      nums1[right] = nums2[nidx];
      nidx--;
    }
    right--;

    // Print nums1 state after each change
    console.log("Updated nums1:", nums1);
  }

  // Final output
  console.log("Merged nums1:", nums1);
};

// Example usage
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
