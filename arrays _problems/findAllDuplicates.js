//* Find All Duplicates in an Array
// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

var findDuplicates = function (nums) {
  if (nums.length === 0 || nums.length === 1) return [];

  let arr = [];

  //* This solution takes TC = O(n2) SC = O(n)--> Still not a better solution but betther than the previous

  // for(let i=0; i<nums.length; i++){
  //     for(let j=i+1; j<nums.length; j++){
  //         if(nums[i] === nums[j]){
  //             arr.push(nums[i]);
  //         }
  //     }
  // }

  //* Let's more optimatize this
  //* TC = O(n) SC = O(n)

  // let obj = {};
  // for (let key of nums) {
  //   obj[key] = (obj[key] || 0) + 1;
  // }

  // for (let key in obj) {
  //   if (obj[key] === 2) {
  //     arr.push(key);
  //   }
  // }

  //* TC = O(n) SC = O(1)
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) arr.push(Math.abs(nums[i])); // If the number at index is already negative, it means it's a duplicate
    nums[index] = -nums[index]; // Mark the number at index as visited by making it negative
  }

  return arr;
};


const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const nums = [1, 1, 2];
// const nums = [1];
console.log(findDuplicates(nums));
