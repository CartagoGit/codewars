//* https://www.codewars.com/kata/5680781b6b7c2be860000036/train/typescript

export function vowelIndices(word: string): number[] {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	const result: number[] = [];

	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word.toLowerCase()[i])) {
			result.push(i + 1);
		}
	}

	return result;
}
