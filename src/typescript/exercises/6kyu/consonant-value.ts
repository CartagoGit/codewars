//* https://www.codewars.com/kata/59c633e7dcc4053512000073/train/typescript

export function solve(word: string) {
	word = word.trim().toLowerCase();
	const points: Record<string, number> = 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.reduce((points, letter, i) => ({ ...points, [letter]: i + 1 }), {});
	const consonants = word.split(/[aeiou]/gi);
	return consonants.reduce((acc, subs) => {
		const valueSubs = subs
			.split('')
			.reduce((acc, char) => acc + (points[char] ?? 0), 0);
		return Math.max(acc, valueSubs);
	}, 0);
}
