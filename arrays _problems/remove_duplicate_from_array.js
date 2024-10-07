function removeDuplicates(nums) {
  let temp = [];
  temp[0] = nums[0];

  for (let i = 1, j = 0; i < nums.length; i++) {
    if (nums[i] !== temp[j]) {
      temp[++j] = nums[i];
    }
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return temp.length;
}

let nums = [0, 0, 0, 1, 2, 3, 4, 5, 5, 5];

removeDuplicates(nums);
