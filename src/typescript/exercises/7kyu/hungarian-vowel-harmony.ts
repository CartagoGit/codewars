//* https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/typescript

const frontVowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
const backVowels = ['a', 'á', 'o', 'ó', 'u', 'ú'];

export function dative(word: string): string | undefined {
	const lastVowel = word
		.split('')
		.reverse()
		.find(
			(letter) =>
				frontVowels.includes(letter) || backVowels.includes(letter)
		);
	if (!lastVowel) return undefined;
	return frontVowels.includes(lastVowel) ? `${word}nek` : `${word}nak`;
}
