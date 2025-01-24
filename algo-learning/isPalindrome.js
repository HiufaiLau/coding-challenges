function isPalindrome(s) {
  //Initialize two pointers at the beginning and end of the string.
  let left = 0;
  let right = s.length - 1;
  //Check whether or not the current pair of characters is identical.
  while (left < right) {
    //If they are not identical, return FALSE. Otherwise, move both pointers by one index toward the middle.
    if (s[left] != s[right]) {
      return false;
    }
    //Keep traversing them toward the middle until they meet.
    left++;
    right--;
  }
  //If we reach the middle of the string without finding a mismatch, return TRUE.
  return true;
}
