function mergeSort(array) {
    //when an array has only one item return that number
    if (array.length===1) {
      return array
      
     } else {
      //otherwise split it down
      let midOfArray = Math.round(array.length/2)
      let leftArray = array.slice(0,midOfArray)
      let rightArray = array.slice(midOfArray)
      
      let sortedArray = []
      let leftIndex = 0
      let rightIndex = 0
      //here it updates newly retuned sorted array
      // it can either be sinlge item array or a array from sortedArray
      leftArray = mergeSort(leftArray)
      rightArray = mergeSort(rightArray)
  
      while (leftIndex<leftArray.length && rightIndex<rightArray.length) {
        if (leftArray[leftIndex]>rightArray[rightIndex]) {
          sortedArray.push(rightArray[rightIndex])
          rightIndex++
        } else {
          sortedArray.push(leftArray[leftIndex])
          leftIndex++ 
        } 
    } 
    // code hits here only when either leftIndex or rightIndex has passed over the length
    for (;leftIndex<leftArray.length;leftIndex++) {
      sortedArray.push(leftArray[leftIndex])
    }
    for (;rightIndex<rightArray.length;rightIndex++) {
      sortedArray.push(rightArray[rightIndex])
    }
    return sortedArray
  }}
    
  
  
  