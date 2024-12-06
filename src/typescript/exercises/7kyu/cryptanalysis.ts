//* https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/typescript

export function wordPattern(word: string): string {
	const letters = word.split('');
	const uniqueLetters = [...new Set(letters)];
	return letters.map((letter) => uniqueLetters.indexOf(letter)).join('.');
}
