//* https://www.codewars.com/kata/59b844528bcb7735560000a0/train/typescript

export function isNice(arr: number[]): boolean {
	if (arr.length === 0) return false;
	const set = new Set(arr);
	return arr.every((num) => set.has(num - 1) || set.has(num + 1));
}
