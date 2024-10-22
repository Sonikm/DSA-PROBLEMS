//* Binary to Decimal
function binaryToDecimal(n) {
  let ans = 0;
  let i = 0;

  while (n) {
    let bit = n & 1;
    ans += bit * Math.pow(2, i);
    n = Math.floor(n / 10);
    i++;
  }

  return ans;
}

let binary = 1010;
let decimal = binaryToDecimal(binary);
  console.log(decimal);
