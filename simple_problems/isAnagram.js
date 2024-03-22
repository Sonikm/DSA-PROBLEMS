//* Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, suing all the original letters exactly once.

// I/p: (s = "anagram"), (t = "nagaram") ----> o/p: true
// i/p: (s = "car"), (t = "cat") ----> o/p: false

//! Logic 1
function isValidAnagram1(s, t) {
  // split convert into an array
  // sort method sort the letters in accending order
  // join method join the array into string

  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  console.log(s, t);

  return s === t;
}

// console.log(isValidAnagram1("anagram", "nagaram"))
// console.log(isValidAnagram2("car", "cat"))

//! Logic 2 --> More optemized
function isValidAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i in str1) {
    // if(obj1[str1[i]]){
    //   obj1[str1[i]] = obj1[str1[i]] + 1;
    // }
    // else{
    //   obj1[str1[i]] =  1;
    // }

    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  console.log(obj1, obj2);
  return true;
}

console.log(isValidAnagram2("anagram", "nagaram"));
console.log(isValidAnagram2("car", "cat"));
