// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.

// [output] integer

function commonCharacterCount(s1, s2) {
    const letters = {}
    let result = 0
    
    for(let i = 0; i < s1.length; i++) {
        letters[s1[i]] = letters[s1[i]] + 1 || 1
    }
    
    for(let i = 0; i < s2.length; i++) {
        if(letters[s2[i]]) {
            letters[s2[i]] -= 1
            result++
        }
    }
    
    return result
}
