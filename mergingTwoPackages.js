// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

// Example:

// input:  arr = [4, 6, 10, 15, 16],  lim = 21

// output: [3, 1] # since these are the indices of the
//                # weights 6 and 15 whose sum equals to 21

function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    let hash = {}
    
    for(let i = 0; i < arr.length; i++) {
      let pair = limit - arr[i]
      
      if(hash[pair] !== undefined) {
        return [i, hash[pair]]
      } else {
        hash[arr[i]] = i
      }    
    }
    
    return []
  }