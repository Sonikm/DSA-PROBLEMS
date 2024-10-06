/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5


*/

function merge(arr, low, high, mid) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  // left half
  mergeSort(arr, low, mid);

  // right half
  mergeSort(arr, mid + 1, high);

  // merge sorted array
  merge(arr, low, high, mid);
  console.log(arr);
}

const arr = [13, 46, 24, 52, 20, 9];
// const arr = [5, 4, 3, 2, 1];
// const res = mergeSort(arr);
// console.log(arr);
mergeSort(arr, 0, arr.length - 1);
