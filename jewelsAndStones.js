// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if(!J || !S) return 0
    let counter = 0
    const jewels = {}
    
    for(let i = 0; i < J.length; i++) {
        jewels[J[i]] = 1
    }
    
    for(let i = 0; i < S.length; i++) {
        if(jewels[S[i]] === 1) {
            counter += 1
        }
    }
    return counter
};

Runtime: 76 ms, faster than 77.05% of JavaScript online submissions for Jewels and Stones.
Memory Usage: 37.6 MB, less than 15.79% of JavaScript online submissions for Jewels and Stones.