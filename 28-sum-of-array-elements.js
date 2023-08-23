const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15


let array1 = [3, 5, 4, 6];
let sum1 = 0;

array1.forEach(item => {
    sum1 += item;
});

console.log(sum);


let array2 = [14, 23, 11, 8, 31];
let sum2 = 0;

array2.map(x => sum2 += x);

console.log(sum2);


let array3 = [10, 20, 30, 40, 50];
let sum3 = 0;

for (let i = 0; i < array3.length; i++) {
  sum3 += array3[i];
}

console.log(sum3);

// output: 150


let array4 = [3, 2, 7, 9, 5];
let sum4 = 0;

for (let x of array4){
    sum4 += x;
}
console.log(sum4);

// output: 26


let array5 = [3, 5, 17, 22, 19];
let sum5 = 0;
let i = -1;

while (++i < array5.length) {
  sum5 += array5[i];
}

console.log(sum5)
// output: 66