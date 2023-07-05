const arr = [1, 2, 3, 4, 5];

// Option 1:
function doubleArrayValues(arr) {
  var doubledArray = [];

  for (var i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }

  return doubledArray;
}

//(Best) Option 4:
function maps(x) {
  return x.map((n) => n * 2);
}

// Option maybe?!?!:
arr.reduce((acc, cur, index) => (arr[index] = cur * 2), 0);
