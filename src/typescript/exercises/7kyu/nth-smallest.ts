//* https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/typescript

export function nthSmallest(arr: number[], pos: number) {
	return arr.sort((a, b) => a - b)[pos - 1];
}
