//* https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/typescript

export function sortVowels(str?: number | string | null): string {
	if (!str || !isNaN(Number(str))) return '';
	const vowels = 'aeiou';
	return str
		.toString()
		.split('')
		.map((letter) =>
			vowels.includes(letter.toLowerCase()) ? `|${letter}` : `${letter}|`
		)
		.join('\n');
}
