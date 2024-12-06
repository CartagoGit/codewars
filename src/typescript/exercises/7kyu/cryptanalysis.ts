//* https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/typescript

export function wordPattern(word: string): string {
	const letters = word.toLowerCase().split('');
	const mapLetters = [...new Set(letters)].reduce((acc, curr, index) => {
		if (!acc[curr]) acc[curr] = index;
		return acc;
	}, {} as Record<string, number>);
	return letters.map((letter) => mapLetters[letter]).join('.');
}

console.log(wordPattern('hello'));
