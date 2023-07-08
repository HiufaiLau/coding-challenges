/* There is a new mobile game that starts
with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus.
The player can jump on any cumulus cloud having a number
that is equal to the number of the current cloud plus 1 or 2.
The player must avoid the thunderheads.
Determine the minimum number of jumps
it will take to jump from the starting postion
to the last cloud. It is always possible to win the game.

For each game,
you will get an array of clouds numbered
if they are safe or 1 if they must be avoided.

Function Description
Complete the jumpingOnClouds function in the editor below. jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers
Returns
int: the minimum number of jumps required */

function jumpingOnClouds(c) {
  const n = c.length;
  let jumps = 0;
  let currentPosition = 0;

  while (currentPosition < n - 1) {
    if (currentPosition + 2 < n && c[currentPosition + 2] === 0) {
      // if it's safe to jump two clouds ahead, do so
      currentPosition += 2;
    } else {
      // Otherwise, jump one cloud ahead
      currentPosition += 1;
    }
    jumps++;
  }

  return jumps;
}
