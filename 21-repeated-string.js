/* There is a string, s , of lowercase English letters that is repeated infinitely many times. 
Given an integer,n, find and print the number of letter a's 
in the first n letters of the infinite string.


Function Description
Complete the repeatedString function in the editor below.
repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider
Returns
int: the frequency of a in the substring */
function repeatedString(s, n) {
  const fullRepeats = Math.floor(n / s.length);
  const remainingChars = n % s.length;

  let count = 0;
  let totalCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }

    if (i < remainingChars && s[i] === "a") {
      totalCount++;
    }
  }

  totalCount += fullRepeats * count;
  return totalCount;
}
