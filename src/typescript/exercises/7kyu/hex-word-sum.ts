//* https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3/train/typescript

export function hexWordSum(string: string): number {
	return (string || '0')
		.toUpperCase()
		.split(' ')
		.map((word) => {
			const dictionary: Record<string, number> = {
				O: 0,
				S: 5,
			};
			const parsedWord = word
				.split('')
				.map((letter) => dictionary[letter] ?? letter)
				.join('');
			const isHex = /^[0-9A-F]+$/i.test(parsedWord);
			return isHex ? parseInt(parsedWord, 16) : 0;
		})
		.reduce((a, b) => a + b, 0);
}
