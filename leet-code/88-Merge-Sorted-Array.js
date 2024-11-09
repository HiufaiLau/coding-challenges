/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
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

merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3));
