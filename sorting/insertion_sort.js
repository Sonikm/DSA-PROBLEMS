/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5

* The best time complexity will be O(n), will iterate only once and if it is already sorted then do'nt need to perform any other iteration
* Worst O(n2), because need to sort each element

*/

function insertionSort(arr) {
  let n = arr.length;

  console.log(arr);

  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    let didSort = 0;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;
      j--;
      didSort = 1;
    }

    if (didSort === 0) {
      console("Array is already sorted that means TC will be O(n)");
    }
  }

  return arr;
}

const arr = [13, 46, 24, 52, 20, 9];
// const arr = [5, 4, 3, 2, 1];
const res = insertionSort(arr);
console.log(res);
