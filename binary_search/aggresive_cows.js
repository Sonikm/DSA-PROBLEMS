function isValid(stalls, n, k, mid) {
  let cows = 1;
  let lastPosition = stalls[0];

  for (let i = 1; i < n; i++) {
    if (stalls[i] - lastPosition >= mid) {
      cows++;
      if (cows >= k) return true;
      lastPosition = stalls[i];
    }
  }

  //  let i = 0, j = 1;
  //   while (j < n) {
  //     if (stalls[j] - stalls[i] >= mid) {
  //       cows++;
  //       if (cows >= k) return true;
  //       i = j;
  //     }
  //     j++;
  //   }

  return false;
}

function aggressiveCows(stalls, k) {
  stalls.sort((a, b) => a - b);
  let mini = stalls[0],
    maxi = 0;
  const n = stalls.length;
  let ans = -1;

  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, stalls[i]);
    maxi = Math.max(maxi, stalls[i]);
  }

  let s = 0,
    e = maxi - mini;
  let mid = Math.floor(s + (e - s) / 2);

  while (s <= e) {
    if (isValid(stalls, n, k, mid)) {
      ans = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = Math.floor(s + (e - s) / 2);
  }

  return ans;
}

let arr = [0, 3, 4, 7, 10, 9];
let k = 4;
console.log(aggressiveCows(arr, k));
