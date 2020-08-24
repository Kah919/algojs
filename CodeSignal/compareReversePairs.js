const rev = num => {
    let reverse = parseInt(num.toString().split('').reverse().join('').replace('0', ''))
    return reverse
}

const arr = [1, 20, 2, 11] // result should be 7

// Given an array of non-negative integers arr, your task is to count the number of pairs (i, j) such that i <= j and
// arr[i] + rev(arr[j]) = arr[j] + rev(arr[i])

const oppositeSums = () => {
    let result = 0

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(isSingleOrSame(arr[i], arr[j])) {
                result++
            }
            
        }
    }

    return result
}

const isSingleOrSame = (num1, num2) => {
    if((num1 === num2) || (num1 < 10 && num2 < 10)) {
        return true
    } else {
        return false
    }
}