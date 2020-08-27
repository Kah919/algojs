// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const s1 = {}
    
    for(let i = 0; i < s.length; i++) {
        s1[s[i]] = s1[s[i]] + 1 || 1
    }
    
    for(let i = 0; i < t.length; i++) {
        if(!s1[t[i]]) return false
        s1[t[i]] -= 1
        if(s1[t[i]] < 0) return false
    }
    return true
};

// Runtime: 88 ms, faster than 84.15% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 38.8 MB, less than 65.22% of JavaScript online submissions for Valid Anagram.