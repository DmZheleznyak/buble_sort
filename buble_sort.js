const arr = [ 27, 234, 5436, 74, 65, 1 ]

const bubleSort = arr => { 
	
	const [...sortedArray] = arr  
	
	const iterationOverAll = sortedArray.length - 1
	
  for ( let i = 0; i < iterationOverAll; i++ ) {
 
    const iterationElement = iterationOverAll - i
 
    for ( let j = 0; j < iterationElement; j++ ) {
			
      if ( sortedArray[j] > sortedArray[j+1] ) {

				[ sortedArray[j], sortedArray[j+1] ] = [ sortedArray[j+1], sortedArray[j] ]  
				
      } 
      
    }

  }

  return sortedArray
}

console.log(`bubleSort -`, bubleSort( arr ) ) 