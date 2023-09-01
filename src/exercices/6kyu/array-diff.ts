//* https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript

export function arrayDiff(a: number[], b: number[]): number[] {
	return a.filter((num) => !b.includes(num));
}
