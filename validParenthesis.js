// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1) return false

    let braces = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    let container = []

    for(let i = 0; i < s.length; i++) {
        if(braces.hasOwnProperty(s[i])) {
          container.push(braces[s[i]])
        } else if(container[container.length - 1] === s[i]) {
          container.pop()
        } else {
          return false
        }
    }
    return container.length === 0 ? true : false
};
