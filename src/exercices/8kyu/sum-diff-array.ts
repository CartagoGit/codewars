//* https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/typescript

export function sumOfDifferences(arr: number[]): number {
	return arr
		.sort((a, b) => b - a)
		.reduce((acc, curr, index, array) => {
			if (index === 0) return acc;
			return acc + (array[index - 1] - curr);
		}, 0);
}
