var arr = [ 5,3242,3532,45,435,234, 2, 7, 34, 4, 6, 8]

const bubleSort = arr => {
//   
  var sorted = false
// 
  var iterationOverAll = arr.length - 1

  for ( let i = 0; i < iterationOverAll; i++ ) {

    var iterationElement = iterationOverAll - i

    for ( let j = 0; j < iterationElement; j++ ) {

      if ( arr[j] > arr[j+1] ) {
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
      } 

      sorted = true

    }

    if (!sorted) break
  }

  return arr
}
const sortedArr = bubleSort( arr )
console.log( sortedArr )