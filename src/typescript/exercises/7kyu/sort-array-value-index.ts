//* https://www.codewars.com/kata/58e0cb3634a3027180000040/train/typescript

export function sortByValueAndIndex(array: number[]): number[] {
	let tuple = array.map((value, index) => [value, value * (index + 1)]);
	return tuple.sort((a, b) => a[1] - b[1]).map((tuple) => tuple[0]);
}
