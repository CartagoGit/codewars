//* https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/typescript

export function foldArray(array: number[], runs: number): number[] {
	if (runs === 0) return array;
	let result = [...array];
	for (let i = 0; i < runs; i++) {
		result = fold(result);
	}
	return result;
}

const fold = (array: number[]): number[] => {
	const result: number[] = [];
	const middle = Math.floor(array.length / 2);
	const isOdd = array.length % 2 !== 0;
	for (let i = 0; i < middle; i++) {
		result.push(array[i] + array[array.length - 1 - i]);
	}
	if (isOdd) result.push(array[middle]);
	return [...result];
};
