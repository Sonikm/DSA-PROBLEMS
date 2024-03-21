//! RECURSION => When a fn calls itself, it's called recursion

// recursive function
function printHW(n) {
  if (n == 0) return;

  console.log("Hello World");
  return printHW(n - 1);
}

printHW(10);
