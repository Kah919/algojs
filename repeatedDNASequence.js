// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const result = []
    if(s.length <= 10) return result
    const obj = {}
    
    for(let i = 0; i <= s.length - 10; i++) {
        const curr = s.slice(i, i + 10)
        obj[curr] = obj[curr] + 1 || 1
    }
    
    for(const str in obj) {
        if(obj[str] > 1) result.push(str)
    }
    
    return result
};

// Runtime: 176 ms, faster than 20.11% of JavaScript online submissions for Repeated DNA Sequences.
// Memory Usage: 58.8 MB, less than 12.28% of JavaScript online submissions for Repeated DNA Sequences.

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const result = []
    if(s.length <= 10) return result
    const obj = {}
    
    for(let i = 0; i <= s.length - 10; i++) {
        const curr = s.slice(i, i + 10)
        obj[curr] = obj[curr] + 1 || 1
        
        if(obj[curr] === 2) result.push(curr)
    }
    
    return result
};

