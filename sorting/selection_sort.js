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

function selectionSort(arr) {
  let n = arr.length;

  console.log(arr);

  for (let i = 0; i < n - 1; i++) {
    let min_inx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[min_inx] > arr[j]) {
        min_inx = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min_inx];
    arr[min_inx] = temp;
  }

  return arr;
}

const arr = [13, 46, 24, 52, 20, 9]; // min_inx = 9
const res = selectionSort(arr);
console.log(res);
