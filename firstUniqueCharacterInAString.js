// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const obj = {}
    
    for(let i = 0; i < s.length; i++) {
        const letter = s[i]
        obj[letter] = obj[letter] + 1 || 1
    }
    
    for(let i = 0; i < s.length; i++) {
        const letter = s[i]
        if(obj[letter] === 1) return i
    }
    
    return -1
};

// Runtime: 124 ms, faster than 49.74% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 40.7 MB, less than 31.85% of JavaScript online submissions for First Unique Character in a String.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length === 0) return -1
    let obj = {}
    let queue = []
    
    for(let i = 0; i < s.length; i++) {
        const letter = s[i]
        if(obj[letter] === undefined) {
            obj[letter] = i
            queue.push(letter)
        } else {
            queue = queue.filter(l => l !== letter)
        }
    }

    if(!queue.length) {
        return -1
    } else {
        return obj[queue[0]]
    }
};