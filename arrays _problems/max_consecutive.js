function findMaxConsecutiveOnes(nums) {
    let maxConsecutive = 0;
    let count1s = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count1s++;
        }else {
            maxConsecutive = Math.max(maxConsecutive, count1s);
            count1s=0;
        }
    }

     maxConsecutive = Math.max(maxConsecutive, count1s);
     return maxConsecutive;
};

let nums = [1,1,0,1,1,1];

const res = findMaxConsecutiveOnes(nums);
console.log(res);