// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 

// Example 1:

// Input: "USA"
// Output: True
 

// Example 2:

// Input: "FlaG"
// Output: False

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(isLowerCase(word) || isCapital(word)) return true
    return false
};

const isLowerCase = word => {
    if(word[0] === word[0].toLowerCase() && word === word.toLowerCase()) {
        return true
    } else {
        return false
    }
}

const isCapital = word => {
    let str = word.slice(1, word.length)
    if(word[0] === word[0].toUpperCase()) {
        if(str === str.toLowerCase() || str === str.toUpperCase()) return true
    }
    return false
}

// if the first letter is not capital none of it is capital
// if the first two letter is capital everything should be capital
// if only the first letter is capital none of the others should be capital