// Root of Number
// Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

// In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

// Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

// Make sure your algorithm is efficient, and analyze its time and space complexities.

// Examples:

// input:  x = 7, n = 3
// output: 1.913

// input:  x = 9, n = 2
// output: 3

function root(x, n) {
    // your code goes here
    // figure out what to the power of n will give me x
    
    // we know that it has to be a number that is less than x
    // use binary search on that range
    
    if(x === 0) return 0 // if x the root is 0 then return 0
    
    let lower = 0
    let upper = x
    let mid = (upper + lower) / 2
    
    while(mid - lower >= 0.001) {
      if(Math.pow(mid, n) > x) { // if mid to the power of n is bigger than our result then 
        upper  = mid // we bring our upper lower to mid
      } else if(Math.pow(mid, n) < x) { // if our mid to the power of n is bigger than our result then 
        lower = mid // we bring our lower higher to our mid 
      } else {
        break // we stop here
      }
      
      mid = (upper + lower) / 2 // we reset our mid
    }
    
    return mid
  }