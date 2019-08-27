// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    if(!root.left && !root.right) return [[root.val]]
    let result = [[root.val]]
    let queue = [root]

    while(queue.length) {
        let len = queue.length

        for(let i = 0; i < len; i++) {
            let curr = queue.shift()

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        let arr = []
        for(let i = 0; i < queue.length; i++) {
            arr.push(queue[i].val)
        }
        result.push(arr)
    }
    result.pop()
    return result
};
