// Write a function that takes an array of characters and reverses the letters in place

const arr = ['a', 'b', 'c']

const reverse = arr => {
    let start = 0
    let end = arr.length - 1

    while(start < end) {
        let left = arr[start]
        let right = arr[end]

        arr[start] = right
        arr[end] = left

        start++
        end--
    }
    return arr
}

console.log(reverse(arr))