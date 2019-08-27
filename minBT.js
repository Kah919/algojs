// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    let depth = 1
    if(!root.left && !root.right) return depth

    let queue = [root]

    while(queue.length) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let currNode = queue.shift()

            if(!currNode.left && !currNode.right) {
                return depth
            } else {
               if(currNode.left) queue.push(currNode.left)
                if(currNode.right) queue.push(currNode.right)
            }
        }
        depth++
    }

    return depth

};
