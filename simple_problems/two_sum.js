    
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(num, target){
    let n = num.length;
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(num[i] + num[j] === target) return [i, j];
        }
    }
}

// console.log(twoSum([5,2,11,7],9))
console.log(twoSum([3,2,4], 6))