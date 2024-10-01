//! RECURSION => When a fn calls itself, it's called recursion

// recursive function
function printN(n) {
  if (n == 0) return;

  printN(n - 1);
  console.log(n);
}

printN(10);
