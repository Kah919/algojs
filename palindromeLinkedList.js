// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let slow = head
    let fast = head
    let stack = []

    while(fast && fast.next) {
        stack.push(slow.val)
        slow = slow.next
        fast = fast.next.next
    }

    if(fast) slow = slow.next

    while(slow) {
        let remove = stack.pop()
        if(remove !== slow.val) return false
        slow = slow.next
    }

    return true
};


// Runtime: 48 ms, faster than 99.43% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 39.6 MB, less than 80.00% of JavaScript online submissions for Palindrome Linked List.
