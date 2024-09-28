//* With all test cases LEETCODE PROBLEM
function reverseInteger(x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  const isNagative = x < 0;

  let reversedNumber = Math.abs(x).toString().split("").reverse().join("");

  let reversed = parseInt(reversedNumber);
  if (isNagative) reversed = -reversed;

  if (reversed > INT_MAX || reversed < INT_MIN) return 0;

  return reversed;
}

console.log(reverseInteger(-123));

/*
 * || C++ solution

int reverse(int x) {
     int ans=0;
    while(x != 0){
        int rem = x%10;
        if(ans > INT_MAX/10 || ans < INT_MIN/10) return 0;
        ans = ans * 10 + rem;
        x = x/10;
    }

    return ans;
    }
*/