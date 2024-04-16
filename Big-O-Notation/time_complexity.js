// const funnyNumber = (array) => {
//     for(let i=0; i<array.length; i++){
//         if(i === 3) return array[i];
//     }
// }

const funnyNumber = (array) => {
    return array[3];
  };
  
  const nums = [420, 96, 12, 69, 77];
  
  // console.time('funnyNumber');
  // console.log(funnyNumber(nums));
  // console.timeEnd('funnyNumber');
  
  function someOperations(n) { // 3 Operations
    return (n * (n + 5)) / 2; //* O(1) constants TC 
  }
  
  // console.time();
  // console.log(someOperations(10000));
  // console.timeEnd('someOperations')
  
  
  // function GoingUpDown(n) {
  
  //    * 2n + 4 Operations = O(n)
  
  //     console.log("Going forward!");
  
  //     for(var i=0; i<n; i++){
  //         console.log(i);
  //     }
  
  //     console.log('At the End Going back');
  
  //     for(var j= n - 1; j >= 0; j--) {
  //         console.log(j);
  //     }
  
  //     console.log("At the start!");
  // }
  
  
  // GoingUpDown(4)
  // console.timeEnd("GoingUpDown")
  
  function printBoth(n){
      //* O^2 Operations = O(n^2)
      for(var i=0; i<n; i++){
          for(var j=0; j < n; j++){
              console.log(i, j);
          }
      }
  }
  
  printBoth(5)