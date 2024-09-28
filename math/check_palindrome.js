function checkPalindrome(n) {

    if(n < 0) return false;

  let temp = n;
  let res = 0;

  while (n) {
    let r = n % 10; // 7
    res = res * 10 + r; // 9877
    n = Math.floor(n / 10); // 0
  }
return res === temp;

//* return  x < 0 ? false : x === +x.toString().split("").reverse().join("")
}

const result = checkPalindrome(-4554);
console.log(result);

