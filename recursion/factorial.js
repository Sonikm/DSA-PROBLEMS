
//* Factorial of a number --> n = 5 => 5*4*3*2*1 
//                                   => 120
function factorial(n){
  if(n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial: ", factorial(8))


/*

 5! = 1 * 2 * 3 * 4 * 5
 4! = 1 * 2 * 3 * 4
 3! = 1 * 2 * 3 
 2! = 1 * 2
 1! = 1

 n = n * fn(n - 1)
 n = 5 => 5 * (4)
 n = 4 => 4 * (3)
 n = 3 => 3 * (2)
 n = 2 => 2 * (1)
 n == 1 return 1 base case     

 */