var check = function(nums) {
    let temp=[];
    let k=0, i=1,j=0, n = nums.length;

    while(i < n && j < n){
        if(nums[i] >= nums[i-1]) i++;
        else {
            if(i+j < n){
                temp[j] = nums[i+j];
                j++;
            }else {
                temp[j] = nums[k];
                k++;
                
                j++;
            }
        }
    }

    for(let i=1; i<n; i++){
        if(temp[i] < temp[i-1]) return false;
    }

    return true;
};

let arr = [3,4,5,1,2];
let result = check(arr);
console.log(result)