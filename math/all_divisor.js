

/*
Divisors of 1: 1
Divisors of 2: 1, 2
Divisors of 3: 1, 3
Divisors of 4: 1, 2, 4
Divisors of 5: 1, 5
Divisors of 6: 1, 2, 3, 6
So, the total sum is 1 + (1 + 2) + (1 + 3) + (1 + 2 + 4) + (1 + 5) + (1 + 2 + 3 + 6) = 30.
*/

function sumOfDivisors(n) {
    // Initialize sum variable to store the result
    let sum = 0;
    
    // Iterate through every number i from 1 to n
    for (let i = 1; i <= n; i++) {
        // Add i to the sum for every multiple of i
        sum += Math.floor(n / i) * i;
    }
    
    return sum;
}

// Example usage:
let n = 6;
console.log(sumOfDivisors(n));  // Output: 30

