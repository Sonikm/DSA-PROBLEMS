var findDuplicates = function (nums) {
  if (nums.length === 0 || nums.length === 1) return [];

  //* This solution takes TC = O(n2) SC = O(n)

  // for(let i=0; i<nums.length; i++){
  //     for(let j=i+1; j<nums.length; j++){
  //         if(nums[i] === nums[j]){
  //             arr.push(nums[i]);
  //         }
  //     }
  // }

  //* Let's more optimatize this
  //* TC = O(n2) SC = O(n) --> Still not a better solution but betther than the previous

  let obj = {};
  let arr = [];

  for (let i of nums) {
    if (obj[i]) {
      obj[i] = "ab";
    } else {
      obj[i] = "a";
    }
  }

  for (let key in obj) {
    if (obj[key] === "ab") {
      arr.push(key);
    }
  }

  console.log(arr);

  return arr;
};

// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const nums = [1, 1, 2];
// const nums = [1];
findDuplicates(nums);
