//* https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/typescript

export function mean(lst: string[]): [number, string] {
	const nums = lst.filter((n) => !isNaN(Number(n))).map(Number);
	const chain = lst.filter((n) => isNaN(Number(n))).join('');
	const median = nums.reduce((a, b) => a + b, 0) / nums.length;
	return [Math.floor(median * 10) / 10, chain];
}
