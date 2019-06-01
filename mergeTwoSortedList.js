// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) {
        return null
    } else if(l1 && !l2) {
        return l1
    } else if(!l1 && l2) {
        return l2
    }

    let l3 = null;
    let curr = null;

    while(l1 && l2) {
        if(l1.val >= l2.val) {
            if(curr) {
                curr.next = new ListNode(l2.val);
                curr = curr.next;
            } else {
                l3 = new ListNode(l2.val);
                curr = l3;
            }
            l2 = l2.next;
        } else {
            if(curr) {
                curr.next = new ListNode(l1.val);
                curr = curr.next;
            } else {
                l3 = new ListNode(l1.val);
                curr = l3;
            }
            l1 = l1.next;
        }
    }

    if(l1) {
        curr.next = l1
    } else {
        curr.next = l2
    }

    return l3
};
