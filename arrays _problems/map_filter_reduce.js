// map, filter, reduce

const nums = [1, 2, 3, 4];

//* map
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});

// console.log(multiplyThree);

const moreThanTwo = nums.filter((num) => num > 2);

// console.log(moreThanTwo);

// the accumulator is initial value 
const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);

console.log(sum);

//* Polyfill for map()

Array.prototype.myMap = (cb) => {};

const arr = [2, 5, 3, 4, 7];

const mapResult = arr
  .map((ar) => {
    return ar + 2;
  })
  .filter((el, i) => el > 5);

// console.log(mapResult);

const forEachResult = arr.forEach((ar, i) => {
  return arr + 2;
});

// console.log(forEachResult);