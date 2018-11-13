var arr = [ 500,430, 60, 8]

const bubleSort = arr => { 

  var iterationOverAll = arr.length - 1

  for ( let i = 0; i < iterationOverAll; i++ ) {

    var iterationElement = iterationOverAll - i

    for ( let j = 0; j < iterationElement; j++ ) {
      if ( arr[j] > arr[j+1] ) {
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]  
      } 
      console.log(arr)
    }

  }

  return arr
}
const sortedArr = bubleSort( arr )
console.log(`sortedArr -`, sortedArr )

// 