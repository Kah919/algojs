// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.
// [JavaScript] Syntax Tips

function isLucky(n) {
    let numString = n.toString()
    let l = numString.slice(0, numString.length/2)
    let r = numString.slice(numString.length/2)   
    let lSum = 0
    let rSum = 0
    
    for(let i = 0; i < numString.length/2; i++) {
        lSum += parseInt(l[i])
        rSum += parseInt(r[i])
    }

    return lSum === rSum
}
