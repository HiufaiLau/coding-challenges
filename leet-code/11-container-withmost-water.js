// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let left = 0; // Start pointer
  let right = height.length - 1; // End pointer
  let maxArea = 0; // Variable to store the maximum area

  while (left < right) {
    // Calculate the area with the current left and right pointers
    const width = right - left;
    console.log(width);

    const currentHeight = Math.min(height[left], height[right]);
    console.log(currentHeight);

    const area = width * currentHeight;
    console.log(area);

    // Update the maximum area if the current area is larger
    maxArea = Math.max(maxArea, area);

    console.log(maxArea);

    // Move the pointer pointing to the shorter line inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Example usage:
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)); // Output: 49
