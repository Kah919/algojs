// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

 

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23
 

// Note:

// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let result = 0
    if(!root) return result
    
    const recursion = (node) => { 
        if(node.val >= L && node.val <= R) result += node.val
        if(!node.left && !node.right) return
        if(node.left) recursion(node.left)
        if(node.right) recursion(node.right)
    }
    
    recursion(root)
    return result
};

// Runtime: 200 ms, faster than 98.81% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 63.7 MB, less than 46.11% of JavaScript online submissions for Range Sum of BST.