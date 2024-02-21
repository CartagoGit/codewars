//* https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/typescript

export function solve(arr: string[]): Number[] {
	const dictionary = 'abcdefghijklmnopqrstuvwxyz';
	return arr.map((word) => {
		return word.split('').reduce((acc, letter, index) => {
			return acc + (dictionary[index] === letter.toLowerCase() ? 1 : 0);
		}, 0);
	});
}
