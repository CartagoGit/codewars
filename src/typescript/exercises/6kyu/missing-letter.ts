//* https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/typescript

export function findMissingLetter(array: string[]): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const isUpper = array[0] === array[0].toUpperCase();
	const start = alphabet.indexOf(array[0].toLowerCase());
	const missingLetter = alphabet
		.slice(start, start + array.length)
		.split('')
		.find((letter, index) => letter !== array[index].toLowerCase());
	return isUpper ? (missingLetter ?? '').toUpperCase() : missingLetter ?? '';
}
