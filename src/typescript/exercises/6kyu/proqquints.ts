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
	const numBits = 32;
	const bits = number.toString(2).padStart(numBits, '0');
	const [firstChain, secondChain] = [
		bits.slice(0, numBits / 2),
		bits.slice(numBits / 2),
	];
	const convertBitsToChain = (bitsToConvert: string): string => {
		let chain: string[] = [];
		let isVowel = true;
		for (let i = 0; i < bitsToConvert.length; i += isVowel ? 2 : 4) {
			isVowel = !isVowel;
			const kindChain = isVowel ? vowels : consonants;
			let index = parseInt(
				bitsToConvert.slice(i, i + (isVowel ? 2 : 4)),
				2
			);
			chain.push(kindChain[index]);
		}
		return chain.join('');
	};
	return `${convertBitsToChain(firstChain)}-${convertBitsToChain(
		secondChain
	)}`;
}
