import { INPUT_DAY_03 } from './input';

export const initDay03 = (): number => {
	return gearRatios(INPUT_DAY_03);
};

const gearRatios = (input: string): number => {
	const matrix: string[][] = input
		.split('\n')
		.map((line) => line.trim().split(''));
	const patternNumber = /^\d$/;
	for (let row = 0; row < matrix.length; row++) {
		for (let cell = 0; cell < matrix[row].length; cell++) {
			let chain = matrix[row][cell];
			if (!chain.match(patternNumber)) continue;
			let checkCell = cell + 1;
			while (
				checkCell < matrix[row].length &&
				!matrix[row][checkCell].match(patternNumber)
			) {
				chain += matrix[row][checkCell];
				checkCell++;
			}
			if (hasAdjacentSymbol({ matrix, row, initCell: cell, lastCell: checkCell - 1 })) {
                
			}
            cell = checkCell;
		}
	}
	return 0;
};

const hasAdjacentSymbol = (data: {
	matrix: string[][];
	row: number;
	initCell: number;
	lastCell: number;
}): boolean => {
	const patternSymbol = /[^\w\s\D.]/;
	const isSymbol = (char: string) => char.match(patternSymbol);
    const { matrix, row, initCell, lastCell } = data;

    

	return true;
};
