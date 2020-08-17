// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    if(!root) return result
    if(!root.left && !root.right) return [`${root.val}`]
    
    const recursion = (node, str) => {
        if(!node.left && !node.right) {
            str += `->${node.val}`
            result.push(str)
        }
        
        if(node.left) {
            recursion(node.left, `${str}->${node.val}`)
        }
        
        if(node.right) {
            recursion(node.right, `${str}->${node.val}`)
        }
    }
    
    if(root.left) recursion(root.left, `${root.val}`)
    if(root.right) recursion(root.right, `${root.val}`)
    
    return result
};

// Runtime: 68 ms, faster than 95.71% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 39 MB, less than 5.38% of JavaScript online submissions for Binary Tree Paths.