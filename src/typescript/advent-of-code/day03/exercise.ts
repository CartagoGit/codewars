import { INPUT_DAY_03 } from './input';

export const initDay03 = (): number => {
	return gearRatios(INPUT_DAY_03);
};

const gearRatios = (input: string): number => {
	const matrix: string[][] = input
		.split('\n')
		.map((line) => line.trim().split(''));
	const patternNumber = /^\d$/;
	let partNumbers: number[] = [];
	for (let row = 0; row < matrix.length; row++) {
		for (let cell = 0; cell < matrix[row].length; cell++) {
			let chain = matrix[row][cell];
			if (!patternNumber.test(chain)) continue;
			let checkCell = cell + 1;
			while (
				checkCell < matrix[row].length &&
				matrix[row][checkCell].match(patternNumber)
			) {
				chain += matrix[row][checkCell];
				checkCell++;
			}
			if (
				hasAdjacentSymbol({
					matrix,
					numberRow: row,
					initCell: cell,
					lastCell: checkCell - 1,
				})
			) {
				partNumbers.push(Number(chain));
			}
			cell = checkCell;
		}
	}
	return partNumbers.reduce((acc, curr) => acc + curr, 0);
};

const hasAdjacentSymbol = (data: {
	matrix: string[][];
	numberRow: number;
	initCell: number;
	lastCell: number;
}): boolean => {
	const patternSymbol = /[^\w\s\d.]/;
	const isSymbol = (char: string) => patternSymbol.test(char);
	const { matrix, numberRow, initCell, lastCell } = data;
	for (let row = numberRow - 1; row <= numberRow + 1; row++) {
		if (row < 0 || row >= matrix.length) continue;
		for (let cell = initCell - 1; cell <= lastCell + 1; cell++) {
			if (cell < 0 || cell >= matrix[row].length) continue;
			if (isSymbol(matrix[row][cell])) return true;
		}
	}
	return false;
};
