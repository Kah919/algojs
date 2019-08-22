// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.
//
//
//
// Example 1:
//
// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:
//
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:
//
// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
//
// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122
// S doesn't contain \ or "

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let reversed = S.split("")
    let left = 0
    let right = reversed.length - 1

    let recursion = (l, r) => {
        if(left ===  right || left > right) {
            return
        }

        if(!isAlphabet(reversed[left])) {
            left++
            return recursion(left, right)
        } else if(!isAlphabet(reversed[right])) {
            right--
            return recursion(left, right)
        }

        let leftLetter = reversed[left]
        let rightLetter = reversed[right]

        reversed[left] = rightLetter
        reversed[right] = leftLetter

        left++
        right--

        return recursion(left, right)
    }

    recursion(left, right)
    return reversed.join("")
};

let isAlphabet = (letter) => {
    let num = letter.charCodeAt(0)
    if((num > 64 && num < 91) || (num > 96 && num < 123)) {
        return true
    } else {
        return false
    }
}
