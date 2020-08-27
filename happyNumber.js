// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n
    if(sum === 1) return true
    const set = new Set()
    
    while(sum !== 1) {
        let newNum = sum.toString().split("").map(num => num * num)
        newNum = newNum.reduce((accumulator, value) => accumulator + value)
        
        if(set.has(newNum)) {
            return false
        } else {
            set.add(newNum)
        }
        
        sum = newNum
        if(newNum === 1) return true
    }    
};

// Runtime: 80 ms, faster than 87.85% of JavaScript online submissions for Happy Number.
// Memory Usage: 39.2 MB, less than 14.45% of JavaScript online submissions for Happy Number.

