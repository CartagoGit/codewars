//* https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/typescript

export function isAllPossibilities(x: number[]): boolean {
	const uniques = [...new Set(x)].filter((num) => num >= 0);
	return uniques.length === Math.max(...x) + 1 && uniques.length === x.length;
}
