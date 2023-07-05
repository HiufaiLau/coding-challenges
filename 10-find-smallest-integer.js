// Given an array of integers your solution should find the smallest integer.
var args = [78, 56, 232, 12, 8];

// Option 1:
function findSmallestInt(args) {
  let smallest = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) smallest = args[i];
  }

  return smallest;
}

// Option 2:
function findSmallestInt(args) {
  let smallest = args[0];

  args.forEach((i) => {
    if (i < smallest) smallest = i;
  });

  return smallest;
}

// Option 3:
function findSmallestInt(args) {
  let smallest = args[0];

  args.forEach((i) => i < smallest && (smallest = i));

  return smallest;
}

//(Best) Option 4:
function findSmallestInt(args) {
  return Math.min(...args);
}

// Option 5:
function findSmallestInt(args) {
  args.sort((a, b) => a - b);
  return args[0];
}

// Option 6:
function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

// Option 7: it will mutate the original array
function findSmallestInt(args) {
  return args.sort((a, b) => a - b).shift();
}

// Option 8:
function findSmallestInt(args) {
  return args.reduce((acc, cur) => (acc < cur ? acc : cur));
}
