// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(!s) return ""
    const queue = []
    let result = ""
    
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            queue.push(s[i])
        }
    }
    
    
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            const newLetter = queue.pop()
            result += newLetter
        } else {
            result += s[i]
        }
    }
    
    return result
};

const isVowel = letter => {
    const vowels = "aeiouAEIOU"
    return vowels.includes(letter)
}

// Runtime: 140 ms, faster than 29.42% of JavaScript online submissions for Reverse Vowels of a String.
// Memory Usage: 43.3 MB, less than 42.49% of JavaScript online submissions for Reverse Vowels of a String.