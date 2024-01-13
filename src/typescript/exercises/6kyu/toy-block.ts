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
	return true;
}
