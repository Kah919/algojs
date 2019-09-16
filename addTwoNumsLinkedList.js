// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
    let curr1 = l1
    let curr2 = l2
    let remainder = 0
    let result = new ListNode()
    let resultList = result

    while(curr1 && curr2) {
        let sum = curr1.val + curr2.val + remainder
        if(sum > 9) {
            remainder = 1
            sum = sum - 10
        } else {
            remainder = 0
        }

        resultList.val = sum

        if(curr1.next && curr2.next) {
            resultList.next = new ListNode()
            resultList = resultList.next
        }

        curr1 = curr1.next
        curr2 = curr2.next

    }


    if(curr1) {
        resultList.next = curr1
        resultList.next.val += remainder

        if(resultList.next.val > 9) {
            remainder = 1
            resultList.next.val = resultList.next.val - 10
        } else {
            remainder = 0
        }
        resultList = resultList.next
    }

    if(curr2) {
        resultList.next = curr2
        resultList.next.val += remainder

        if(resultList.next.val > 9) {
            remainder = 1
            resultList.next.val = resultList.next.val - 10
        } else {
            remainder = 0
        }
        resultList = resultList.next
    }

    while(remainder) {
        if(resultList.next) {
            resultList.next.val += remainder
            if(resultList.next.val > 9) {
                remainder = 1
                resultList.next.val = resultList.next.val - 10
            } else {
                remainder = 0
            }
            resultList = resultList.next
        } else {
            resultList.next = new ListNode()
            resultList.next.val = remainder
            remainder = 0
        }
    }

    return result
};
