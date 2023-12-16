import { INPUT_DAY_15 } from './input';

export const initDay15 = () => {
	return getHash(INPUT_DAY_15);
};

const getHash = (input: string): number => {
	const chains = input.split(',').map((chain) => chain.trim());
	const chainsValue: number[] = [];
	for (let chain of chains) {
		const resultChain = chain.split('').reduce((curr, char) => {
			const asciiChain = getAscii(char) + curr;
			const plus17 = asciiChain * 17;
			const mod = plus17 % 256;
			return mod;
		}, 0);

		chainsValue.push(resultChain);
	}
	const result = chainsValue.reduce((acc, curr) => acc + curr, 0);
	return result;
};

const getAscii = (input: string): number => {
	return input.charCodeAt(0);
};


const getHashOneLine = (input: string): number =>
	input
		.split(',')
		.map((chain) =>
			chain
				.trim()
				.split('')
				.reduce(
					(curr, char) => ((char.charCodeAt(0) + curr) * 17) % 256,
					0
				)
		)
		.reduce((acc, curr) => acc + curr, 0);
