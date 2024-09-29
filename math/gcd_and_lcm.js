function findGCDAndLCM(n1, n2) {
  let min = Math.min(n1, n2);
  let max = Math.max(n1, n2);
  let lcm, gcd;

  //* GCD
  for (let i = min; i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
      break;
    }
  }

  //* LCM
  for (let i = max; i < n1 * n2; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      lcm = i;
      break;
    }
  }

  return [lcm, gcd];
}

console.log(findGCDAndLCM(12, 9));
