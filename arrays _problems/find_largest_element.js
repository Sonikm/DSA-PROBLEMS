function largest(arr) {
  let large = -(2 ** 31);

  for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }

  return large;
}

let arr = [1, 8, 7, 56, 90];

let res = largest(arr);
console.log(res);
