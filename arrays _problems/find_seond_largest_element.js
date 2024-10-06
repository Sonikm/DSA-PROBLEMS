function secondLargest(arr) {
  let firstLargest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    if (arr[i] < firstLargest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let arr = [1, 8, 7, 56, 90];

let res = secondLargest(arr);
console.log(res);
