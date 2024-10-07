function missingNumber(nums) {
  let n = nums.length;
  //lets first sort the array
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  // now do find missing element
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) return i;
  }

  return n;
}

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const res = missingNumber(nums);
console.log(res);
