// https://leetcode.com/problems/pascals-triangle/
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// First attempt

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1], [1, 1]]
    
    let pascal = [[1], [1, 1]]
    
    for(let i = 2; i < numRows; i++) {
        let newRow = [1]
        for(let j = 0; j < pascal[i - 1].length - 1; j++) {
            let currPascal = pascal[i - 1]
            newRow.push(currPascal[j] + currPascal[j + 1])
        }
        
        newRow.push(1)
        pascal.push(newRow)
    }  
    return pascal
};

// Runtime: 56 ms, faster than 45.53% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 34 MB, less than 7.69% of JavaScript online submissions for Pascal's Triangle.

