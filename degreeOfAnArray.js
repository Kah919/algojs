// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const obj = {}
    let degree = 1
    let min = nums.length

    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        if(obj[curr]) {
            obj[curr].range = (i + 1) - obj[curr].initial,
            obj[curr].count = obj[curr].count + 1
            if(obj[curr].count > degree) degree = obj[curr].count
        } else {
            obj[curr] = {
                initial: i,
                count: 1,
                range: 1
            }
        }
    }
    
    for(const num in obj) {
        if(obj[num].count === degree && obj[num].range < min) {
            min = obj[num].range
        }
    }
    
    return min
};

// Runtime: 84 ms, faster than 90.31% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 41.2 MB, less than 49.78% of JavaScript online submissions for Degree of an Array.

