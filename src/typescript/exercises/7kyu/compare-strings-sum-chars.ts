//* https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/typescript

export function compare(s1: string | null, s2: string | null): boolean {
	const [cleanS1, cleanS2] = [s1, s2].map((chain) => {
		const justLetters = (chain ?? '').toUpperCase().replace(/[^a-z]/gi, '');
		return justLetters.length === chain?.length ? justLetters : '';
	});
	const sumChars = (chain: string) =>
		chain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return sumChars(cleanS1) === sumChars(cleanS2);
}
