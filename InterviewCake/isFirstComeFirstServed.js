const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
  let takeOutCount = 0
  let dineInCount = 0
  
  for(let i = 0; i < servedOrders.length; i++) {
    let curr = servedOrders[i]
    if(curr === takeOutOrders[takeOutCount]) {
      takeOutCount++
    } else if(curr === dineInOrders[dineInCount]) {
      dineInCount++
    } else {
      return false
    }
  }
  
  if(takeOutCount !== takeOutOrders.length || dineInCount !== dineInOrders.length) return false

  return true;
}

console.log(isFirstComeFirstServed([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]))
console.log(isFirstComeFirstServed([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))

// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]