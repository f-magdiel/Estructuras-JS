function QuickSort(arr, left, right) {
    let len = arr.length,
        index
    if(len > 1) {
      index = partition(arr, left, right)
      if(left < index - 1) {
        QuickSort(arr, left, index - 1)
      } 
      if(index < right) {
        QuickSort(arr, index, right)
      }
    }
    return arr
  }
  
  function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        j = right                 
  
    while(i <= j) {
    
      while(arr[i] < pivot) {
        i++
      }
     
      while(arr[j] > pivot) {
        j--
      }
  
      if(i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]  
        i++
        j--
      }
    }
    return i
  }
  
  let array = [1,6,3,26,4,2,9,12];
  console.log(array) //impresión array no ordenado
  QuickSort(array,0,array.length-1)
  console.log(array) //impresión array ordenado