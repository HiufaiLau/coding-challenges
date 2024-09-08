// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Step 1: Filter the array to include only positive numbers and create a set for quick lookup
    const positiveSet = new Set(A.filter(num => num > 0));
    
    // Step 2: Iterate starting from 1 to find the smallest missing positive integer
    let smallestMissing = 1;
    
    while (positiveSet.has(smallestMissing)) {
        smallestMissing++;
    }
    
    return smallestMissing;
}

// Explanation:
// Filter out non-positive numbers: We only care about positive numbers, so we filter out all negative numbers and zero.
// Create a set: This ensures that we can check if a number exists in the array in constant time.
// Iterate from 1 upwards: The smallest positive integer is 1, and we incrementally check if each number exists in the set. The first number that is not in the set is the smallest missing positive integer.
// Example Walkthrough:
// Given A = [1, 3, 6, 4, 1, 2], after filtering and using a set, we have positiveSet = {1, 2, 3, 4, 6}. The function will return 5 since it's the smallest positive integer not in the set.
// Given A = [1, 2, 3], the function will return 4.
// Given A = [-1, -3], the function will return 1.
// This solution works efficiently even with large input sizes.