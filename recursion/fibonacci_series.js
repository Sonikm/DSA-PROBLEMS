//* Fibonacci --> n = 6 ==> f(n) = f(n-1) + f(n-2) => 8
//* Fibonacci series => 0, 1, 1, 2, 3, 5, 8, 13...

function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(6))