//* https://www.codewars.com/kata/59c633e7dcc4053512000073/train/typescript

export function solve(s: string) {
	const dictonary = 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.map((char, i) => ({ char, value: i + 1 }));
	const vowels = /[^aeiou]+/gi;
	const consonants = s.trim().toLowerCase().split(vowels);
	return consonants.reduce((acc, subs) => {
		const valueSubs = subs.split('').reduce((acc, char) => {
			return (acc += dictonary.find(
				({ char: charDic }) => charDic === char
			)!.value);
		}, 0);
		console.log({ acc, valueSubs, consonants, subs });
		return Math.max(acc, valueSubs);
	}, 0);
}
