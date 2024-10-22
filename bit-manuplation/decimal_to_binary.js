//* Decimal to Binary
function convertDecimalToBinary(n) {
  let ans = 0;
  let i = 0;

  while (n) {
    let bit = n & 1;
    ans += bit * Math.pow(10, i);
    n = n >> 1;
    i++;
  }

  return ans;
}

let n = 10;
let binary = convertDecimalToBinary(n);
console.log(binary);


/*
function convertDecimalToBinary(n) {
    let ans = 0;
    let i = 0;
  
    while (n) {
      let r = n % 2;
      ans += r * Math.pow(10, i);
      n = Math.floor(n / 2);
      i++;
    }
  
    return ans;
  }

*/


