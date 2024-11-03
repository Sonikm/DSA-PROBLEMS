function sortColors(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;

    for(let j=0; j<nums.length; j++){
            if(nums[j] === 0) red++;
            if(nums[j] === 1) white++;
            if(nums[j] === 2) blue++;
        }
    
    let i=0;
    while(red--) nums[i++] = 0;
    while(white--) nums[i++] = 1;
    while(blue--) nums[i++] = 2;

    return nums;
  return nums;
}

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

let nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
