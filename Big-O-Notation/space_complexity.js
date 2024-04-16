// Space Complexity

const funnyNumber = (array) => {
    const array2 = [];
    var sum = 0; 
    for(let i=0; i<array.length; i++){
        array2.push(i * 10); //* O(n) SC
        sum += array[i]; // * O(1) SC
    }

    console.log(sum);

    return array2;
}

  const nums = [420, 96, 12, 69, 77];
  
//   console.log(funnyNumber(nums));

//! Premitive Types --> 
// Boolean, num, undefined, null => Constant
// String, arrays, objects => dynamic

function createMatrix(n){
    //* O(n^2) SC
   let matrix = [];
   
   for(let i=0; i<n; i++){
    matrix[i] = [] // matrix[i] = [0][1,3,4], [1][1,2,3]
    for(let j=0; j<n;j++){
        matrix[i][j] = i+j;
    }
   }

   return matrix;
}

console.log(createMatrix(10));