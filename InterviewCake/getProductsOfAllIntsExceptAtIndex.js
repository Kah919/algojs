function getProductsOfAllIntsExceptAtIndex(intArray) {
    if(intArray.length < 2) throw new Error()
    
    const productArr = []
    
    let previousProduct = 1
    
    for(let i = 0; i < intArray.length; i++) {
      productArr.push(previousProduct)
      previousProduct *= intArray[i]
    }
    
    let afterProduct = 1
    
    for(let i = intArray.length - 1; i >= 0; i--) {
      productArr[i] *= afterProduct
      afterProduct *= intArray[i]
    }
    
    console.log(productArr)
  
    return productArr;
  }

  getProductsOfAllIntsExceptAtIndex([1, 2, 3])
  getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5])
  getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3])
  getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0])
  getProductsOfAllIntsExceptAtIndex([-3, 8, 4])
  getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2])
//   getProductsOfAllIntsExceptAtIndex([])
//   getProductsOfAllIntsExceptAtIndex([1])
