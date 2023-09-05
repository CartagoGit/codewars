//* https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript

export function order(words: string): string {
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const orderWords = words
		.split(' ')
		.map((word) => ({
			word,
			number: word.split('').find((char) => numbers.includes(char)),
		}));
	return orderWords
		.sort((a, b) => Number(a.number) - Number(b.number))
		.map(({ word }) => word)
		.join(' ');
}
