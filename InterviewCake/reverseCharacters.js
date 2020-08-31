// Write a function that takes an array of characters and reverses the letters in place

const arr = ['a', 'b', 'c', 'd']

const reverse = arr => {
    let start = 0
    let end = arr.length - 1

    while(start < end) {
        const curr = arr[start]

        arr[start] = arr[end]
        arr[end] = curr

        start++
        end--
    }
    return arr
}

console.log(reverse(arr))