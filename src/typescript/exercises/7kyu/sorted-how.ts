//* https://www.codewars.com/kata/580a4734d6df748060000045/train/typescript

export function isSortedAndHow(array: number[]): string {
	const ascending = array.slice().sort((a, b) => a - b);
	const descending = array.slice().sort((a, b) => b - a);
	if (array.every((v, i) => v === ascending[i])) return 'yes, ascending';
	if (array.every((v, i) => v === descending[i])) return 'yes, descending';
	return 'no';
}
