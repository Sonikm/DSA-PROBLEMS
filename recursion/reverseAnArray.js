
//* Using two pointer 
// function reverseArray(arr) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while(left < right){
//     let temp = arr[left];
//      arr[left] = arr[right];
//      arr[right] = temp;
//      left++, right--;
//     }
    
//     return arr;
// }

// console.log(reverseArray([5, 3, 8, 6]))

//* Using two pointer 
function reverseArrayRecursive(arr, left = 0, right = arr.length - 1) {
    // Base case: If left index is greater than or equal to right, stop recursion
    if (left >= right) {
        return arr;
    }

    // Swap elements at left and right indices
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Recursively call the function for the next pair of elements
    return reverseArrayRecursive(arr, left + 1, right - 1);
}

// Example usage
let array = [1, 2, 3, 4, 5];
console.log(reverseArrayRecursive(array));  // Output: [5, 4, 3, 2, 1]
