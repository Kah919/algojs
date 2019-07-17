// Reverse a singly linked list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // this is the itterative way
var reverseList = function(head) {
    let prev = null
    let curr = head

    while(curr) {
        let next = curr.next // we have the next node saved
        curr.next = prev // the current next will be the previous node
        prev = curr // now the previous variable will hold the current node
        curr = next // move the current counter to what is saved in next
    }
    return prev
};


// recursive approach

var reverseList = function(head) {
    let prev = null
    let curr = head
    return reverse(prev, curr)
};

let reverse = (prev, curr) => {
    if(!curr) return prev
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    return reverse(prev, curr)
}
