function bitManipulation(n, i) {
  return (1 << i) ^ n;
}

let n = 70;
let i = 3;

console.log(bitManipulation(n, i));
// 70 => 1000110
 