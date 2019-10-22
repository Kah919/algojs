// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


 

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ancestors1 = []
    let ancestors2 = []
    
    let traverse = (curr, target, ancestors) => {
        if(!curr) return
        if(curr.val === target) {
            ancestors.unshift(curr)
            return
        }
        ancestors.unshift(curr)
        
        if(target < ancestors[0].val) {
            traverse(curr.left, target, ancestors)
        } else {
            traverse(curr.right, target, ancestors)
        }
    }
    
    traverse(root, p.val, ancestors1)
    traverse(root, q.val, ancestors2)

    for(let i = 0; i < ancestors1.length; i++) {
        if(ancestors2.indexOf(ancestors1[i]) > -1) return ancestors1[i]
    }
    
};


// Runtime: 72 ms, faster than 91.88% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 43.8 MB, less than 40.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.