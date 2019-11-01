// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mySet = new Set()
    
    for(let i = 0; i < nums.length; i++) {
        if(mySet.has(nums[i])) {
            mySet.delete(nums[i])
        } else {
            mySet.add(nums[i])
        }
    }
    
    
    return [...mySet]
};

// Runtime: 60 ms, faster than 72.12% of JavaScript online submissions for Single Number.
// Memory Usage: 38.3 MB, less than 13.46% of JavaScript online submissions for Single Number.