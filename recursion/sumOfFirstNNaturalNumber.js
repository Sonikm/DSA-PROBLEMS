// Natural numbers start with --> 1, 2, 3, 4, 5, 6
// Sum of n Naturel number n = 5 --> 1 + 2 + 3 + 4 + 5 ==> ans -> 15

function sum(n) {
  if (n == 1) return 1;

  return n + sum(n - 1);
}

const ans = sum(10);
console.log("Sum of n natural number is: ", ans);

/**
  n = 5 => 5 + sum(5 - 1) return 5 + 10 ==> ans is 15
  n = 4 => 4 + sum(4 - 1) return 4 + 6
  n = 3 => 3 + sum(3 - 1) return 3 + 3
  n = 2 => 2 + sum(2 - 1) return 2 + 1
  n = 1 => 1 + sum(1 - 1) ==> base case return 

 */
