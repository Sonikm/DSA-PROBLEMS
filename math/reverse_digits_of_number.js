/**
 Input:N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.
 */

/**
 //* using built in method
  function reverseDigitsOfNumber(n) {
  const reversedNumber = parseInt(
    n.toString().split("").reverse().join(""),
    10
  );
  console.log(reversedNumber);
}

 */

//* without built in method
// function reverseDigitsOfNumber(n) {
//   var reversedNumber = "";
//   var temp = n;

//   while (temp) {
//     var r = temp % 10;
//     temp = Math.floor(temp / 10);
//     reversedNumber = reversedNumber + `${r}`;
//   }

//   console.log(parseInt(reversedNumber, 10));
//   //   console.log(reversedNumber);
// }

//* Another approach
function reverseDigitsOfNumber(n) {
  var reversedNumber = 0;

  while (n) {
    var r = n % 10;
    n = Math.floor(n / 10);
    reversedNumber = reversedNumber * 10 + r;
  }

  console.log("reversedNumber ", reversedNumber);
}

reverseDigitsOfNumber(123);
