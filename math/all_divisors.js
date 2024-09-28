function findAllDivisors(x){
  let arr = [];

  for(let i=1; i<=x; i++){
    if(x % i == 0) {
        arr.push(i);
    }
  }

  return arr;
}

const result = findAllDivisors(15);
console.log(result);

