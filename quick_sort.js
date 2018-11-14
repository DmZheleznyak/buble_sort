const quickSort = arr => {

	const [...array] = arr

	const middleIndex = Math.round( ( copyArray.length - 1 ) / 2 )
	const pivot = array[ middleIndex ]	
	let indexFirst = 0
	let indexLast = array.length - 1 

	while( indexFirst < indexLast ) {

		// var rightSideNumber = 0
		console.log( array[middleIndex] )
		while ( indexFirst < middleIndex  && array[ indexFirst ] < pivot ) {
			indexFirst += 1
		}
		while ( indexLast > middleIndex && array[ indexLast ] > pivot ) {
			indexLast -= 1
		} 

		if ( indexFirst < indexLast ) {
			[ array[indexFirst], array[indexLast] ] = [ array[indexLast], array[indexFirst] ]
		}

	} 

	console.log(`pivot`, pivot ) // 354

}

const checkArray = [ 30, 25, 1000, 354, 60234, 750, 100, 234, 4, 45 ] 

quickSort( checkArray ) 

// Из-за рекурсии и других "накладных расходов" 
// Quicksort может оказаться не столь уж быстрой для коротких массивов. 
// Поэтому, если в массиве меньше CUTOFF элементов 
// (константа зависит от реализации, обычно равна от 3 до 40), 
// вызывается сортировка вставками. 
// Увеличение скорости может составлять до 15%

// в качестве опорного(pivot) целесообразно 
// брать средний из трех, 
// а если массив достаточно велик - 
// то из девяти произвольных элементов.