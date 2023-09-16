//* https://www.codewars.com/kata/526233aefd4764272800036f/train/typescript

type matrix = number[][];
export function matrixAddition(a: matrix, b: matrix): matrix {
	let result: matrix = [];
	for (let indexRow = 0; indexRow < a.length; indexRow++) {
		let row: number[] = [];
		for (
			let indexColumn = 0;
			indexColumn < a[indexRow].length;
			indexColumn++
		) {
			row.push(a[indexRow][indexColumn] + b[indexRow][indexColumn]);
		}
		result.push(row);
	}


	return result;
}
