function largestOddNumber(num) {
  while (num != "") {
    let lastInt = parseInt(num.at(-1));
    if (lastInt % 2 != 0) return num;
    num = num.slice(0, -1);
  }

  return "";
}

let num = "35427";

largestOddNumber(num);
