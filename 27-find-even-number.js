// How to Find the Even Numbers in an Array with JavaScript

const numbers = [7, 10, 15, 8, 13, 18, 6];

// Option-01
var evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);



// Option-02
var evenNumber2 = [];
for(num of numbers){
    num % 2 ===0 ? evenNumber2.push(num) : null;
}
console.log(evenNumber2);

// Option-03
const evenNumber3 = [];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenNumber3.push(num);
  }
});

console.log(evenNumber3);

// Option-04
const evenNumber4 = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    evenNumber4.push(num);
  }
}

console.log(evenNumber4);

// Performance comparison 
// Compare the performance of these four methods using an array with 10 million elements (with elements from 1 to 10 million).
const numbers = [...Array(10000000)].map(
    (_, index) => index + 1
  );
  function measurePerf(label, method) {
    console.time(label);
    method();
    console.timeEnd(label);
  }
  measurePerf('filter', () => {
    const evens = numbers.filter((num) => num % 2 === 0);
  });
  measurePerf('forEach', () => {
    const evens = [];
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        evens.push(num);
      }
    });
  });
  measurePerf('for...of', () => {
    const evens = [];
    for (const num of numbers) {
      if (num % 2 === 0) {
        evens.push(num);
      }
    }
  });
  measurePerf('for', () => {
    const evens = [];
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (num % 2 === 0) {
        evens.push(num);
      }
    }
  });