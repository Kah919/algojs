// Island Count
// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

// Example:

// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]

// output: 6 # since this is the number of islands in binaryMatrix.
//           # See all 6 islands color-coded below.
// alt

// Constraints:

// [time limit] 5000ms

// [input] array.array.int binaryMatrix

// 1 ≤ binaryMatrix.length ≤ 100
// 1 ≤ binaryMatrix[i].length ≤ 100
// [output] integer

function getNumberOfIslands(binaryMatrix) {
    // your code goes here
    
    let result = 0
    function dfs(row, col) {
      if(binaryMatrix[row][col] == 0) return // break case
      
      binaryMatrix[row][col] = 0 // turn the number to a 0
      
      if(row + 1 < binaryMatrix.length && binaryMatrix[row + 1][col] == 1) {
        dfs(row + 1, col)
      }
      if(row -1 >= 0 && binaryMatrix[row -1][col] == 1) {
        dfs(row - 1, col)
      }
      if(col + 1 < binaryMatrix[row].length && binaryMatrix[row][col + 1] == 1) {
        dfs(row, col + 1)
      }
      if(col - 1 >= 0 && binaryMatrix[row][col - 1] == 1) {
        dfs(row, col - 1)
      }
    }
    
    for(let i = 0; i < binaryMatrix.length; i++) { // this is the row
      for(let j = 0; j < binaryMatrix[i].length; j++) { // this is the column
        if(binaryMatrix[i][j] === 1) {
          dfs(i, j)
          result += 1
        }
      }
    }
    
    return result
  }
  
