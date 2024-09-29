function checkPrime(n) {
  let count = 0;

  /*
  n = 5
  i = 1,2 
  3 = 1,3
  4 = 1,2,4 not a prime
  5 = 1,5
  prime = 1,2,3,5

 */

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPrime(17));
