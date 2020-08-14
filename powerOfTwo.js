// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 1) return true
    if(n <= 0) return false
    
    let count = 2
    
    while(count <= n) {
        if(count === n) return true
        count *= 2
    }
    
    return false
};

// Runtime: 92 ms, faster than 62.16% of JavaScript online submissions for Power of Two.
// Memory Usage: 38.3 MB, less than 25.42% of JavaScript online submissions for Power of Two.