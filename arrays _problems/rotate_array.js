function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // Ensure k is within bounds

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    
    // Reverse the first part (0 to k-1)
    reverse(nums, 0, k - 1);
    
    // Reverse the second part (k to n-1)
    reverse(nums, k, n - 1);

    return nums;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

rotate(nums, k);
console.log(nums); // Output should be [5, 6, 7, 1, 2, 3, 4]
