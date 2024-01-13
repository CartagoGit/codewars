//* https://www.codewars.com/kata/5cab471da732b30018968071/train/typescript

export function buildSquare(blocks: number[]): boolean {
	const countBlocks: Record<number, number> = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
	};
	for (let block of blocks) {
		countBlocks[block]++;
	}

	// Block from 4 are complete rows
	let possibleRows = countBlocks[4];
	// Block from 3 plus 1, are complete columns
	while (countBlocks[3] >= 1 && countBlocks[1] >= 1) {
		possibleRows++;
		countBlocks[3]--;
		countBlocks[1]--;
	}
	// Block from 2 plus 2 or 2 plus two times 1, are complete columns
	while (countBlocks[2] >= 2) {
		possibleRows++;
		countBlocks[2] -= 2;
	}
	while (countBlocks[2] >= 1 && countBlocks[1] >= 2) {
		possibleRows++;
		countBlocks[2]--;
		countBlocks[1] -= 2;
	}
	// Blocks from 1 four times are complete rows
	const oneDiffRows = Math.floor(countBlocks[1] / 4);
	possibleRows += oneDiffRows;

	return possibleRows >= 4;
}
