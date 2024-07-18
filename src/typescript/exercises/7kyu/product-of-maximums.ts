//* https://www.codewars.com/kata/5a63948acadebff56f000018/train/typescript

export function maxProduct(numbers: number[], size: number): number {
	const maximums = numbers.sort((a, b) => b - a).slice(0, size);
	return maximums.reduce((acc, cur) => acc * cur, 1);
}
