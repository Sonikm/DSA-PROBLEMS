function countDigits(n) {
  var temp = n;
  var r,
    count = 0;

  while (temp) {
    r = temp % 10;
    temp = Math.floor(temp / 10);
    if (n % r === 0) {
      count++;
    }
  }

  console.log(count);
}

countDigits(2446);
