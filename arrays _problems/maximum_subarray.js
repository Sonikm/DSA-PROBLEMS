function maxSubArray(nums) {
  let maxi = nums[0];
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
    maxi = Math.max(maxi, sum);
    if (sum < 0) sum = 0;
  }

  return maxi;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(nums);
