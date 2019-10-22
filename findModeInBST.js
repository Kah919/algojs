// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let hash = {}
    let result = []
    let occurance = 0
    
    let recursion = node => {
        if(!node) return
        
        if(!hash[node.val]) {
            hash[node.val] = 1
        } else {
            hash[node.val] += 1
        }
        
        if(node.left) recursion(node.left)
        if(node.right) recursion(node.right)
    }
    
    recursion(root)
    
    for(let key in hash) {
        if(hash[key] > occurance) {
            occurance = hash[key]
            result = [key]
        } else if(hash[key] === occurance) {
            result.push(key)
        }
    }
    return result
};