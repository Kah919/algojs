// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [1]
    let right = [1]
    let result = []
    
    for(let i = 0; i < nums.length - 1; i++) {
        let product = left[left.length - 1] * nums[i]
        left.push(product)
    }
    
    for(let i = nums.length - 1; i > 0; i--) {
        let product = right[0] * nums[i]
        right.unshift(product)
    }
    
    for(let i = 0; i < left.length; i++) {
        result.push(left[i] * right[i])
    }
    
    return result
};

