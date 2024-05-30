//* https://www.codewars.com/kata/643462af501b65000f2ce9d7/train/typescript
const vowels = 'aiou';
const consonants = 'bdfghjklmnprstvz';

export function fromProquint(proquint: string): number {
	const chain = [...proquint.split('-').join('')];
	const bits = chain.map((char) => {
		const isVowel = vowels.includes(char.toLowerCase());
		const kindChain = isVowel ? vowels : consonants;
		let index = kindChain.indexOf(char.toLowerCase());
		return index.toString(2).padStart(isVowel ? 2 : 4, '0');
	});
	return parseInt(bits.join(''), 2);
}

export function toProquint(number: number): string {
	return 'babab-babab';
}
