
//* Factorial of a number --> n = 5 => 5*4*3*2*1 
//                                   => 120
function factorial(n, i=1, fact=1, result = []){
     if(fact > n) return result;

     result.push(fact);

     return factorial(n, ++i, fact * i, result);
  }
  
  console.log("Factorial: ", factorial(235))
// factorial(3)
  
  