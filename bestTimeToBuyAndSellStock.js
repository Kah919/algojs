// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) return 0
    
    let currPrice = prices[0]
    let min = prices[0];
    let profit = 0
    
    for(let i = 1; i < prices.length; i++) {
        let currVal = prices[i] // current price
        
        
        // if the current value is smaller than our stored min, replace it
        if(currVal < min) {
            min = currVal
        }
        
        // if our stored minimum value - new value gives us bigger profits
        // that means our min would've been the best time to buy so we set currPrice
        // to our current min
        
        if(currVal - min > profit) {
            profit = currVal - min
            currPrice = min
        } 
        
        
        // if the current stock keeps increasing in number then our new profit
        // will keep increasing 
        
        if(currVal - currPrice > profit) {
            profit = currVal - currPrice
        }
    }
    
    return profit
};

// Runtime: 76 ms, faster than 77.03% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.5 MB, less than 26.39% of JavaScript online submissions for Best Time to Buy and Sell Stock.