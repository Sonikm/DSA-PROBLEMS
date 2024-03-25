//* Find the Duplicate Number

//   Input: nums = [1,3,4,2,2]
//   Output: 2
//   Example 2:

//   Input: nums = [3,1,3,4,2]
//   Output: 3

//* TC = O(n2) SC = O(n)
var findDuplicate = function (nums) {
  let obj = {};
  for (let i of nums) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] >= 2) return key;
  }
};

// const nums = [1,3,4,2,2];
// const nums = [3,1,3,4,2];
const nums = [3, 3, 3, 3, 3];
console.log(findDuplicate(nums));
