
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.
var twoSum = function(nums, target) {
    if(nums.length === 2) return [0, 1];
    
    let hashMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        let found = hashMap[find]
        if(found !== undefined) {
            return [found, i]
        } else {
            hashMap[nums[i]] = i;
        }
    } 
};


// Given a 32-bit signed integer, reverse digits of an integer.
var reverse = function(x) {
    let positive = x > 0;
    
    let stringify = parseInt(x.toString().split("").reverse().join(""));
    let reversed = positive ? stringify : stringify * -1;
    
    return reversed > 2147483648 || reversed < -2147483648 ? 0 : reversed;
};

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward. Do not turn it into a string.

var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x === 0) return true
    
    let reverse = 0;
    let num = x;
    
    while(num > 0) {
        reverse = (reverse * 10) + (num % 10)
        num = Math.floor(num / 10);
    }
    return reverse === x;
};

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs.length === 0) return prefix;
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 0; j < strs.length; j++) {
             if(strs[j][i] != strs[0][i]) {
                 return prefix;
             }
        }
        prefix += strs[0][i];
    }
    return prefix;
};

