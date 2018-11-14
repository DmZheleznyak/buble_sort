const quickSorte = arr => {

	const [...copyArray] = arr

	const pivot = copyArray => {
		
		if ( 5 < copyArray.length ) {

			const middleNumber = Math.round( copyArray.length / 2 )

			return copyArray[middleNumber]

		} 

		console.log( pivot(copyArray) )



	} 

}

const checkArray // to be continue

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