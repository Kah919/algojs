// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

function highestProductOf3(arrayOfInts) {
    if(arrayOfInts.length < 3) throw new Error("Less than 3")
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1])
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1])
    
    let lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1]
    let highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1]
    
    let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]
    
    for(let i = 2; i < arrayOfInts.length; i++) {
      const curr = arrayOfInts[i]
      
      highestProductOfThree = Math.max(
        highestProductOfTwo * curr,
        lowestProductOfTwo * curr,
        highestProductOfThree
      )
      
      lowestProductOfTwo = Math.min(
        lowestProductOfTwo,
        lowest * curr,
        highest * curr
      )
      
      highestProductOfTwo = Math.max(
        highestProductOfTwo,
        lowest * curr,
        highest * curr
      )
      
      lowest = Math.min(lowest, curr)
      highest = Math.max(highest, curr)
    }
    
    return highestProductOfThree
  }

  console.log(highestProductOf3([1, 2, 3, 4]))
  console.log(highestProductOf3([6, 1, 3, 5, 7, 8, 2]))
  console.log(highestProductOf3([-5, 4, 8, 2, 3]))
  console.log(highestProductOf3([-10, 1, 3, 2, -10]))
  console.log(highestProductOf3([-5, -1, -3, -2]))
//   console.log(highestProductOf3([]))
//   console.log(highestProductOf3([1]))
//   console.log(highestProductOf3([1, 1]))

  