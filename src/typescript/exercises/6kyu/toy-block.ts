//* https://www.codewars.com/kata/5cab471da732b30018968071/train/typescript

export function buildSquare(blocks: number[]): boolean {
	const countBlocks = blocks.reduce(
		(acc, curr) => {
			acc[curr]++;
			return acc;
		},
		{
			1: 0,
			2: 0,
			3: 0,
			4: 0,
		} as Record<number, number>
	);
	// Block from 4 are complete rows
	let possibleRows = countBlocks[4];
	// Block from 3 plus 1, are complete columns
	for (let i = 0; i < countBlocks[3]; i++) {
		if (countBlocks[1] > 0) {
			possibleRows++;
			countBlocks[1]--;
		}
	}
	// Block from 2 plus 2 or 2 plus two times 1, are complete columns
	for (let i = 0; i < countBlocks[2]; i++) {
		if (countBlocks[2] > 0) {
			possibleRows++;
			countBlocks[2]--;
		} else if (countBlocks[1] > 1) {
			possibleRows++;
			countBlocks[1] -= 2;
		}
	}
	// Blocks from 1 four times are complete rows
	const oneDiffRows = Math.floor(countBlocks[1] / 4);
	possibleRows += oneDiffRows;

	return possibleRows >= 4;
}
