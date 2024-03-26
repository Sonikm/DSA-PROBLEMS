//* Find the Duplicate Number

//   Input: nums = [1,3,4,2,2]
//   Output: 2
//   Example 2:

//   Input: nums = [3,1,3,4,2]
//   Output: 3

//* TC = O(n) SC = O(n)
var findDuplicate = function (nums) {
  // let obj = {};
  // for (let i of nums) {
  //   if(obj[i]){
  //     return i;
  //   }
  //   obj[i] = 1;
  // }


  // * TC = O(n) SC = O(1)
  for(let i=0; i<nums.length; i++){
     let index = Math.abs(nums[i])-1;
     if(nums[index] < 0) return nums[i];
     nums[index] = -nums[index];
  }
};

// const nums = [1,3,4,2,2];
// const nums = [3,1,3,4,2];
const nums = [3, 3, 3, 3, 3];
console.log(findDuplicate(nums));
