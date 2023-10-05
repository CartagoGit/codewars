//* https://www.codewars.com/kata/59c633e7dcc4053512000073/train/typescript

export function solve(word: string): number {
	word = word.trim().toLowerCase();
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const consonants = word.split(/[aeiou]/gi);
	const points = consonants.map((subs) =>
		subs
			.split('')
			.reduce((acc, char) => acc + (alphabet.indexOf(char) + 1), 0)
	);
	return Math.max(...points);
}
