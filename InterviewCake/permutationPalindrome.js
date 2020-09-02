// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    const letters = {}
    let single = 0
    
    for(let i = 0; i < theString.length; i++) {
      letters[theString[i]] = letters[theString[i]] + 1 || 1
      if(letters[theString[i]] % 2 !== 0) {
        single++
      } else {
        single--
      }
    }
  
    return single < 2;
  }