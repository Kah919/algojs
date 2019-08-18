// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head || !head.next) return null // if there is no head or if theres only one thing return null

    let slow = head, fast = head; // making a slow and fast pointer

    for(let i = 0; i < n; i++) { // making the faster pointer this much ahead
        if(!fast) return head // if the head is fast that means the n is bigger than our list
        fast = fast.next // setting out current fast pointer to the next pointer
    }

    // if the n is 2 then we set our fast pointer 2 points ahead so when the fast pointer reaches the end then that means our
    // slow counter is where it needs to be deleted

    if(!fast) return head.next // this is for a test case of if nth number is the length of the linked list

    while(fast.next !== null) { // this is going to keep moving the counters until the fast meets the end
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next // slow's next will be the number you want to delete so we move pointers here
    return head // return the head which will have been altered by the slow
};
