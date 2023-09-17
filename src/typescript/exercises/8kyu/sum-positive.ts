//* https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript

export function positiveSum(arr: number[]): number {
	return arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
}
