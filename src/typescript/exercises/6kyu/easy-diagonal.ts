//* https://www.codewars.com/kata/559b8e46fa060b2c6a0000bf/train/typescript

export function diagonal(numRows: number, numDiagonal: number): number {
	//* Triangle of Pascal
	const triangle = generateTriangle(numRows);
	return getDiagonalSum({ numRows, triangle, numDiagonal });
}

const generateTriangle = (numRows: number): number[][] => {
	// It starts with a 1 at the top, and each subsequent row is constructed by adding two 1s to the ends of the row above it.
	let triangle: number[][] = [[1]];

	// Generate rows in triangle
	for (let rowIndex = 1; rowIndex <= numRows; rowIndex++) {
		let row = [1]; // Every row starts with 1
		for (let diagonalIndex = 1; diagonalIndex < rowIndex; diagonalIndex++) {
			// The value in position is the sum of the two values above it from the previous row
			const previousRow = triangle[rowIndex - 1];
			row.push(
				previousRow[diagonalIndex - 1] + previousRow[diagonalIndex]
			);
		}
		row.push(1); // Every row ends with 1
		triangle.push(row);
	}
	return triangle;
};

const getDiagonalSum = (data: {
	numRows: number;
	triangle: number[][];
	numDiagonal: number;
}): number => {
	const { numRows, triangle, numDiagonal } = data;
	// Get sum of diagonal specified
	let sum = 0;
	const diagonalLength = numRows - numDiagonal + 1;
	for (
		let diagonalIndex = 0;
		diagonalIndex < diagonalLength;
		diagonalIndex++
	) {
		const rowIndex = diagonalIndex + numDiagonal;
		const row = triangle[rowIndex];
		sum += row[diagonalIndex];
	}
	return sum;
};

console.log('result:', diagonal(7, 2));
