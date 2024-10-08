function findUnion(arr1, arr2, n, m) {
  let ans = [];
  let i = 0,
    j = 0;

  while (i < n && j < m) {
    while (i < n - 1 && arr1[i] === arr1[i + 1]) i++;
    while (j < m - 1 && arr2[j] === arr2[j + 1]) j++;

    if (arr1[i] === arr2[j]) {
      ans.push(arr1[i]);
      i++, j++;
    } else if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < n) {
    while (i < n - 1 && arr1[i] === arr1[i + 1]) i++;
    ans.push(arr1[i]);
    i++;
  }

  while (j < m) {
    while (j < m - 1 && arr2[j] === arr2[j + 1]) j++;
    ans.push(arr2[j]);
    j++;
  }

  return ans;
}

let n = 5,
  arr1 = [1, 2, 3, 4, 5];
let m = 5,
  arr2 = [1, 2, 3, 6, 7];

findUnion(arr1, arr2, n, m);
