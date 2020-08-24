const rev = num => {
    let reverse = parseInt(num.toString().split('').reverse().join('').replace('0', ''))
    return reverse
}

const arr = [1, 20, 2, 11] // result should be 7

// Given an array of non-negative integers arr, your task is to count the number of pairs (i, j) such that i <= j and
// arr[i] + rev(arr[j]) = arr[j] + rev(arr[i])

const compareReversePairs = () => {
    let result = 0

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if((arr[i] === arr[j]) || (arr[i] < 10 arr[j] < 10)) {
                result++
            }
            
        }
    }

    return result
}