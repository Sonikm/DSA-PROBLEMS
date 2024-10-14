function lenOfLongSubarr(arr, n, k) {
  let res = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) res = Math.max(res, j - i + 1);
    }
  }

  return res;
}

let n = 6,
  arr = [10, 5, 2, 7, 1, 9],
  k = 15;

lenOfLongSubarr(arr, n, k);
