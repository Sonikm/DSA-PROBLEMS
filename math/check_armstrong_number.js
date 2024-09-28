function checkArmstrongNumber(n) {
  if (n < 0) return false;

  let temp = n;
  let res = 0;

  while (n) {
    let r = n % 10; // 3
    res = (r*r*r) + res; // (3*3*3) + (5*5*5) + (1*1*1) = 27 + 125 + 1 = 153
    n = Math.floor(n / 10); // 0
  }
  return res === temp;
}

const result = checkArmstrongNumber(371);
console.log(result);
