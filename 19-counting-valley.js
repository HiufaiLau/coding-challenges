// We need to split the given string s to track each step.
// create a variable for each step:steps and split it into an array of substrings
// 2. We need a count of how many times Gary enters a valley during his hike.

// create a variable for each valley entered:valleyCount
// 3. We need to keep track of Gary’s current sea level status

// create a variable for Gary’s current sea level:currentSeaLevel
// 4. We need to know the sea level status so that we can tell when he has left one valley and entered another.

// create a variable forvalleyStatus
// 5. We need to look through each step in the substring steps and do some if/else statements depending on the currentSeaLevel and valleyStatus

// 6. We need to return the valley count after analyzing each step:
//(Answer) Option 1:
function countingValleys(stepss, path) {
  let ts = path.split('');
  let valleyCount = 0;
  let currentSeaLevel = 0;
  let valleyStatus = false;
  ts.forEach((step) => {
    step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
    if (currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true;
    } else if (currentSeaLevel >= 0 && valleyStatus) {
      valleyStatus = false;
    }
  });
  return valleyCount;
}
// Option 2:
function countingValleys(steps, path) {
  let strArr = path.split('');
  let count = 0;
  let result = 0;
  for (let step = 0; step < steps; step++) {
    if (count == 0 && strArr[step].toLowerCase() == 'd') {
      count -= 1;
      result += 1;
    } else if (strArr[step].toLowerCase() == 'd') {
      count -= 1;
    } else {
      count += 1;
    }
  }
  return result;
}
