function pairSum(arr, target){
    let i=0; j=arr.length-1;

    while(i<j){
      let sum = arr[i] + arr[j];

      if(sum == target) return [i, j];
      else if(sum > target) j--;
      else i++;
    }

}

let arr = [2,7,11,15];
console.log(pairSum(arr, 18));
