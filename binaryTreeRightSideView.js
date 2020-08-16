// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = []
    if(!root) return result
    let depth = 0
    
    const recursion = (node, level) => {
        level += 1
        if(level > depth) {
            depth += 1
            result.push(node.val)
        }
        
        if(node.right) {
            recursion(node.right, level)
        }
        
        if(node.left) {
            recursion(node.left, level)
        }
    }
    
    recursion(root, 0)
    return result
};

// itterate throughout the tree and mark its depth
// the depth on the right side gets priority


// Runtime: 80 ms, faster than 64.69% of JavaScript online submissions for Binary Tree Right Side View.
// Memory Usage: 39 MB, less than 5.14% of JavaScript online submissions for Binary Tree Right Side View.

// Cleaner solution with arry indecies

var rightSideView = function(root) {
    const result = []

    const recursion = (node, depth) => {
        if(!node) return

        if(!result[depth]) {
            result[depth] = node.val
        }

        recursion(node.right, depth + 1)
        recursion(node.left, depth + 1)
    }

    recursion(root, 0)
    return result
};