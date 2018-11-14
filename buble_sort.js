const newArray = [ 27, 234, 5436, 74, 65, 1 ]

const bubleSort = arr => { 
	
	const iterationOverAll = arr.length - 1
	
  for ( let i = 0; i < iterationOverAll; i++ ) {
 
    const iterationElement = iterationOverAll - i
 
    for ( let j = 0; j < iterationElement; j++ ) {
			
      if ( arr[j] > arr[j+1] ) {

				[ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]  
				
      } 
      
    }

  }

  return arr
}

const sortedArr = bubleSort( newArray )

console.log(`sortedArr -`, sortedArr ) 