// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0]
    let min = nums[0]
    let result = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        let currMax = max
        
        max = Math.max(nums[i], nums[i] * currMax, nums[i] * min)
        min = Math.min(nums[i], nums[i] * currMax, nums[i] * min)
        
        result = Math.max(max, result)
    }
    
    return result
};

// Runtime: 72 ms, faster than 90.66% of JavaScript online submissions for Maximum Product Subarray.
// Memory Usage: 37.5 MB, less than 24.91% of JavaScript online submissions for Maximum Product Subarray.