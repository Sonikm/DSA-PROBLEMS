function isPossible(boards, n, k, mid){
    let painters=1;
    let time=0;
 
    for(let i=0; i<n; i++){
        if(time + boards[i] <= mid ){
            time += boards[i];
        }else {
            painters++;
 
            if(painters > k || boards[i] > mid) return false;
            time = boards[i];
        }
    }
 
    return true;
 }
 
 function findLargestMinDistance(boards,  k)
 {
    let sum = 0;
    let n = boards.length;
 
    for(let i=0; i<n; i++){
        sum += boards[i];
    }
 
    let s = 0, e = sum;
    let ans = -1;
    let mid = Math.floor(s + (e-s));
 
    while(s<=e){
        if(isPossible(boards, n, k, mid)){
          ans = mid;
          e = mid-1;
        }else {
          s = mid+1;
        }
 
        mid = Math.floor(s + (e-s));
    }
 
    return ans;
 }

 let boards = [2,1,5,6,2,3], k =2;

 console.log(findLargestMinDistance(boards, k))