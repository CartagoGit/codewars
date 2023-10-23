//* https://www.codewars.com/kata/56cac350145912e68b0006f0/train/typescript

export function arrange(strng: string): string {
	const words = strng.split(' ');
	for (let i = 0; i < words.length - 1; i++) {
		const prevWord = words[i + 1] ?? '';
		const currWord = words[i];
		const prevLength = prevWord.length;
		const currLength = currWord.length;
		const isMinus =
			i % 2 ? prevLength > currLength : prevLength < currLength;
		if (isMinus) [words[i], words[i + 1]] = [prevWord, currWord];
	}
	return words
		.map((value, index) =>
			index % 2 ? value.toUpperCase() : value.toLowerCase()
		)
		.join(' ');
}
