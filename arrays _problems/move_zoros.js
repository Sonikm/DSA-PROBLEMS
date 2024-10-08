function moveZeros(arr) {
  let i = 0, // point to non-zero element
    j = 0, // point to zero element
    n = arr.length;

  for (i; i < n; i++) {
    if (arr[i] !== 0) arr[j++] = arr[i];
  }

  while (j < n) arr[j++] = 0;

  return arr;
}

let arr = [0, 1, 0, 3, 12];

let res = moveZeros(arr);
console.log(res);



    // let arr = [];

    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] != 0) 
    //     arr.push(nums[i]);
    // }

    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] == 0) 
    //     arr.push(nums[i]);
    // }

    // for(let i=0; i<nums.length; i++){
    //    nums[i] = arr[i];
    // }
