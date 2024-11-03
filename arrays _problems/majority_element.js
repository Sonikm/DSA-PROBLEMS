function majorityElement(nums) {
  let majorityElement = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let tmpCount = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) tmpCount++;
    }

    console.log(tmpCount);

    if (tmpCount > count) {
      majorityElement = nums[i];
      count = tmpCount;
    }
  }

  return majorityElement;
}

let nums = [3, 3, 4];
console.log(majorityElement(nums));
