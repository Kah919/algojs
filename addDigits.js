// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num
    let newNum = num.toString().split("").map(num => parseInt(num))
    newNum = newNum.reduce((x, y) => x + y)
    
    return addDigits(newNum)
};

// Runtime: 92 ms, faster than 72.27% of JavaScript online submissions for Add Digits.
// Memory Usage: 38.4 MB, less than 27.05% of JavaScript online submissions for Add Digits.