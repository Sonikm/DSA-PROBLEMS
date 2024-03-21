//* Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of 
// a different word or phrase, suing all the original letters exactly once.

// I/p: (s = "anagram"), (t = "nagaram") ----> o/p: true
// i/p: (s = "car"), (t = "cat") ----> o/p: false

function isValidAnagram(s, t){
    // split convert into an array
    // sort method sort the letters in accending order
    // join method join the array into string

   s = s.split("").sort().join("");
   t = t.split("").sort().join("");
  console.log(s, t);

  return s === t;
}

console.log(isValidAnagram("anagram", "nagaram"))
console.log(isValidAnagram("car", "cat"))
// isValidAnagram("anagram", "nagAram")