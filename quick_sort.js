const quickSort = arr => {

	const [...array] = arr

	const arrayForLess = []
	const arrayForEqual = []
	const arrayForGreater = []

	if ( array.length > 1 ) {
		const indexPivot = Math.round( ( array.length ) / 2 )
		const pivot = array[ indexPivot ]

		for (let i = 0; i < array.length; i++ ) {
			
			if ( i !== indexPivot ) {

				if ( array[i] < pivot ) {
					console.log(`less Number`, array[i])
					arrayForLess.push( array[i] )
				}

				if ( array[i] === pivot ) {
					console.log(`equal Number`, array[i])
					arrayForEqual.push( array[i] )
				}

				if ( array[i] > pivot ) {
					console.log(`greater Number`, array[i])
					arrayForGreater.push( array[i] )
				}
				
			}

		}
		console.log(`arrayForLess`, arrayForLess )
		console.log(`arrayForEqual`, arrayForEqual )
		console.log(`arrayForGreater`, arrayForGreater )

		const sortedArray = [...arrayForLess, ...arrayForEqual, ...arrayForGreater]
		// console.log( `sortedArray`, sortedArray )
		
	} else {
		return array
	}

}

const checkArray = [ 3, 2, 10, 5, 4, 7, 8, 1, 9, 6, 11 ] 

quickSort( checkArray ) 

// Из-за рекурсии и других "накладных расходов" 
// Quicksort может оказаться не столь уж быстрой для коротких массивов. 
// Поэтому, если в массиве меньше CUTOFF элементов 
// (константа зависит от реализации, обычно равна от 3 до 40), 
// вызывается сортировка вставками. 
// Увеличение скорости может составлять до 15%

// в качестве опорного(pivot)

// const quickSort = arr => {

// 	const [...array] = arr

// 	const middleIndex = Math.round( ( array.length - 1 ) / 2 )
// 	const pivot = array[ middleIndex ]	
// 	let indexFirst = 0
// 	let indexLast = array.length - 1 

// 	while( indexFirst < indexLast ) {

		
// 		console.log( array[middleIndex] )
// 		while ( indexFirst < middleIndex  && array[ indexFirst ] < pivot ) {
// 			indexFirst += 1
// 		}
// 		while ( indexLast > middleIndex && array[ indexLast ] > pivot ) {
// 			indexLast -= 1
// 		} 

// 		if ( indexFirst < indexLast ) {
// 			[ array[indexFirst], array[indexLast] ] = [ array[indexLast], array[indexFirst] ]
// 		}

// 	} 

// 	console.log(`pivot`, pivot ) // 354

// }

// const checkArray = [ 30, 25, 1000, 354, 60234, 750, 100, 234, 4, 45 ] 

// quickSort( checkArray ) 