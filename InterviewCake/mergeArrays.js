// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (myArray, alicesArray) => {
    const merged = []
    let a = 0
    let b = 0

    while(a !== myArray.length && b !== alicesArray.length) {
        if(myArray[a] < alicesArray[b]) {
            merged.push(myArray[a])
            a++
        } else {
            merged.push(alicesArray[b])
            b++
        }
    }

    if(a !== myArray.length) {
        for(let i = a; i < myArray.length; i++) {
            merged.push(myArray[a])
            a++
        }
    } 

    if(b !== alicesArray.length) {
        for(let i = b; i < alicesArray.length; i++) {
            merged.push(alicesArray[b])
            b++
        }
    }

    return merged
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

