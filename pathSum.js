// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let result = false;
    
    const recursion = (node, currentSum) => {
        if(!node || result) return;
        
        currentSum += node.val;
        
        if(!node.left && !node.right && currentSum === sum) {
            result = true;
            return;
        }
        
        recursion(node.left, currentSum);
        recursion(node.right, currentSum);
    }
    
    recursion(root, 0)
    return result;
};

// Runtime: 64 ms, faster than 75.80% of JavaScript online submissions for Path Sum.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Path Sum.