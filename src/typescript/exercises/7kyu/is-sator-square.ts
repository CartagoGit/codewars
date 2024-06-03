//* https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/typescript

export function isSatorSquare(tablet: string[][]): boolean {
	console.log(tablet);
	if (
		tablet.length !== tablet[0].length ||
		tablet.some((row) => row.length !== tablet.length)
	)
		return false;
	if (tablet.some((row) => row.some((cell) => !cell))) return false;

	const permutedArray = getPermutedArray(tablet);
	const premutedChain = permutedArray.map((row) => row.join(''));
	const permutedReverseChain = permutedArray.map((row) =>
		row.reverse().join('')
	);
	for (let [row, horizontal] of tablet.entries()) {
		const restTablet = [...tablet.slice(0, row), ...tablet.slice(row + 1)];
		const restReverseHorizontalChain = restTablet.map((row) =>
			row.reverse().join('')
		);
		const horizontalChain = horizontal.join('');
		const hasHorizontalReverse =
			restReverseHorizontalChain.includes(horizontalChain);
		const hasVertical = premutedChain.includes(horizontalChain);
		const hasVerticalReverse =
			permutedReverseChain.includes(horizontalChain);
		console.log(
			hasHorizontalReverse,
			hasVertical,
			hasVerticalReverse,
			restTablet, {permutedArray}
		);
		if (!hasHorizontalReverse || !hasVertical || !hasVerticalReverse)
			return false;
	}
	return true;
}

const getPermutedArray = (tablet: string[][]) => {
	let permutedArray: string[][] = [...tablet];
	for (let i = 0; i < tablet.length; i++) {
		for (let j = 0; j < i; j++) {
			permutedArray[i][j] = tablet[j][i];
		}
	}
	return permutedArray;
};
