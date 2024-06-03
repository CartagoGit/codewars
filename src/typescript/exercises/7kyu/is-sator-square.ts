//* https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/typescript

export function isSatorSquare(tablet: string[][]): boolean {
	if (
		tablet.length !== tablet[0].length ||
		tablet.some((row) => row.length !== tablet.length)
	)
		return false;
	if (tablet.some((row) => row.some((cell) => !cell))) return false;

	const permutedArray = getPermutedArray(tablet);
	const permutedChain = permutedArray.map((row) => [...row].join(''));
	const permutedReverseChain = permutedArray.map((row) =>
		[...row].reverse().join('')
	);
	for (let [row, horizontal] of tablet.entries()) {
		const restReverseHorizontalChain = tablet.map((row) =>
			[...row].reverse().join('')
		);
		const horizontalChain = horizontal.join('');
		const hasHorizontalReverse =
			restReverseHorizontalChain.includes(horizontalChain);
		const hasVertical = permutedChain.includes(horizontalChain);
		const hasVerticalReverse =
			permutedReverseChain.includes(horizontalChain);
		if (!hasHorizontalReverse || !hasVertical || !hasVerticalReverse)
			return false;
	}
	return true;
}

const getPermutedArray = (tablet: string[][]) => {
	let permutedArray: string[][] = [...tablet];
	for (let i = 0; i < tablet.length; i++) {
		for (let j = 0; j < tablet.length; j++) {
			permutedArray[i][j] = tablet[j][i];
		}
	}
	return permutedArray;
};
