//! Qns 1. Implement Flatten Method on an Array with and without Inbuilt Methods
// creating nultilevel array
// const numbers = [['1','2'], ['3', '4', ['5', ['6'], '7']]];
const numbers = [
  [1, 2],
  [3, 4, 5, [6, [7], 8]],
];

function flatted(numbers) {
  //* With flat method
  const flatNumbers1 = numbers.flat(Infinity);

  //* Without flat method
  // Single level array
  const arr = [1, 2, [3, 4], [6], 8, 0];
  const flatNumbers2 = [].concat(...arr);

  // multilevel array
  const flatNumbers3 = numbers.toString().split(",").map(Number);

  return flatNumbers3;
}

// console.log(flatted(numbers));

// ~----------------------------------------------------------------------------------------------------------------------------------

//! Qns 2. find the number that appears most frequently in an array.

function findHighestOccu(arr) {
  const obj = {};

  // obj = {1: 1, 3: 4, 1: 2, 5: 2, 6: 2, 7: 1};

  for (let elem of arr) {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }

  let maxCountElem,
    maxCount = 0;

  for (let key in obj) {
    if (obj[key] >= maxCount) {
      maxCount = obj[key];

      maxCountElem = key;
    }
  }

  return maxCountElem;
}

const arr = [1, 3, 3, 3, 3, 2, 2, 2, 5, 5, 6, 6, 7];

// console.log(findHighestOccu(arr));

//! Qns 3. Find mid element
function findMidElement() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let len = Math.floor(arr.length / 2);

  console.log(arr[len]);
}

// findMidElement();

//! Qns 4. Searching
function searchElement(elem) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let e in arr) {
    if (arr[e] == elem) {
      return e;
    }
  }

  return -1;
}

// console.log(searchElement(7));

//! Qns 4. Sorting

function sortArr() {
  const arr = [40, 100, 1, 5, 25, 10];
  /*
  [0,1,2,3,4,5] = 6
          [40,100,1,5,25,10] 
  i=0 --> [40,1,5,25,10,100]
  i=1 --> [1,5,25,10,40,100]
  i=2 --> [1,5,10,25,40,100]
  i=3 --> [1,5,10,25,40,100]
  i=4 --> [1,5,10,25,40,100]

 */

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(sortArr());
