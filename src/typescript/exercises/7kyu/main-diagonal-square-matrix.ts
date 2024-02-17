//* https://www.codewars.com/kata/551204b7509063d9ba000b45/train/typescript

export const mainDiagonalProduct = (mat: number[][]): number =>
	mat.reduce((acc, row, index) => acc * row[index], 1);
