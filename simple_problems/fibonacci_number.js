// Qns 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34....
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3 ---->>>>> Output: 2

// ! ONE WAY TO FIND FIBONACCI NUMBER
// function findFibonacciNumber(n) {

//   if(n <= 1) return n === 1 ? 1 : 0;

//   let n1 = 0;
//   let n2 = 1;
//   let ans = [0, 1];

//   while (n-- > 1) {
//     r = n1 + n2;
//     n1 = n2;
//     n2 = r;
//     ans.push(r);
//   }

//   return ans;
// }

// ! ANOTHER WAYS
function findFibonacciNumber(n) {
  if (n <= 1) return n;

  let series = [0, 1];

  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series[n];
}

// const res = findFibonacciNumber(8);
// console.log(res);

// ! USING RECURSION
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

const f = fib(8);
console.log(f);