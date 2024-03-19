// function isPlaindrom(x) {
//   let reverse = 0;
//   let digit;
//   let temp = x;

//   while (x) {
//     digit = x % 10;
//     reverse = reverse * 10 + digit;
//     x = Math.floor(x / 10);
//   }

//   return temp === reverse;
// }

// console.log("is palindrom: ", isPlaindrom(9669));

//* Another way to find Palindrom of a number
function isPlaindrom(num) {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}

const res = isPlaindrom(3993);
console.log(res);
