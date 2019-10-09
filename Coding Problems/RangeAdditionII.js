/**
 * Given an m * n matrix M initialized with all 0's and several update operations.

Operations are represented by a 2D array, and each operation is represented by an array with two positive integers a and b, which means M[i][j] should be added by one for all 0 <= i < a and 0 <= j < b.

You need to count and return the number of maximum integers in the matrix after performing all the operations.

 */

// Brute Force
var maxCount = function(m, n, ops) {

    const countMatrix = [];
    const largestNumCounter = { value: 0, count: m*n }

    ops.forEach( (op) => {
        const [x, y] = op
        for(let i=0; i<x; i++){
            if(!countMatrix[i]){ countMatrix[i] = []}
            for(let j=0; j<y; j++){
                if(!countMatrix[i][j]){ countMatrix[i][j] = 0}
                let positionNewVal = countMatrix[i][j] + 1;
                countMatrix[i][j] = positionNewVal;

                if(positionNewVal > largestNumCounter.value){
                    largestNumCounter.value = positionNewVal;
                    largestNumCounter.count = 1;
                }else if(positionNewVal === largestNumCounter.value){
                    largestNumCounter.count++;
                }
            }
        }
    })
    return largestNumCounter.count
};


// Optimized
var maxCount = function(m, n, ops) {

  ops.forEach((op) => {
    m = Math.min(m, op[0]);
    n = Math.min(n, op[1]);
  })
  return m * n
};

console.log(maxCount(
  3,
  3,
  [[2,2],[3,3]]
))

console.log(maxCount(
  3,
  3,
  []
))

console.log(maxCount(
  39999,
  39999,
  [[19999,19999]]
))