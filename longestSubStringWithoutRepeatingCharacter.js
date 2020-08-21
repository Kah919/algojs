// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    
    let longest = 0
    let currLongest = 0
    let currString = ""
    const letter = {}
    
    
    
    for(let i = 0; i < s.length; i++) {
        if(!letter[s[i]]) {
            // if no letter exist then we increment our subString and counter
            letter[s[i]] = true
            currString += s[i]
            currLongest += 1
            
        } else {
            // that means the letter already exist so we gotta chop it off
            const idx = currString.indexOf(s[i])
            currString = currString.slice(idx + 1)
            currString += s[i]
            currLongest = currString.length
        }
        if(currLongest > longest) longest = currLongest
    }
    
    return longest
};

// Runtime: 152 ms, faster than 42.56% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 44.5 MB, less than 16.00% of JavaScript online submissions for Longest Substring Without