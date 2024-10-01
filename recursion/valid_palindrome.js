function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the cleaned string is a palindrome
 let left=0, right = cleanedStr.length-1;

 while(left < right){
    if(cleanedStr[left++] !== cleanedStr[right--]) return false;
 }

  return true; // It's a palindrome
}

//* USING RECUSRSION

// function isPalindrome(s, left = 0, right = s.length - 1) {
//   if (left > right) return true;

//   if (s[left] !== s[right]) return false;

//   return isPalindrome(s, ++left, --right);
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
// console.log(isPalindrome("race a car")); // Output: false
// console.log(isPalindrome("abcba")); // Output: true
