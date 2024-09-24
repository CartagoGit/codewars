//* https://www.codewars.com/kata/66e793bba4b1a6f2e8f890e5/train/typescript

export function trailingZeros(n: number): number {
	const matched = n.toString(2).match(/0+$/);
	return matched ? matched[0].length : 0;
}
