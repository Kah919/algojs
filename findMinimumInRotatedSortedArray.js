// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1
// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0]
    let left = 0
    let right = nums.length - 1
    
    while(right >= left) {
        const mid = Math.floor((right + left) / 2)
        const leftMid = nums[mid - 1]
        const rightMid = nums[mid + 1]
        
        if(leftMid > nums[mid]) return nums[mid]
        if(rightMid < nums[mid]) return rightMid
        
        if(nums[left] < nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
};

// Runtime: 72 ms, faster than 76.72% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 37.1 MB, less than 11.19% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.