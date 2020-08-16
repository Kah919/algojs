// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const result = []
    if(!root) return result
    
    const recursion = (node, total, arr) => {
        total += node.val
        arr.push(node.val)
        
        if(!node.left && !node.right && total === sum) {
            result.push(arr)
        }
        
        if(node.left) {
            recursion(node.left, total, [...arr])
        }
        
        if(node.right) {
            recursion(node.right, total, [...arr])
        }
    }
    
    recursion(root, 0, [])
    return result
};

// Runtime: 92 ms, faster than 72.81% of JavaScript online submissions for Path Sum II.
// Memory Usage: 48.5 MB, less than 13.66% of JavaScript online submissions for Path Sum II.