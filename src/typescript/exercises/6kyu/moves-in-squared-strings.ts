//* https://www.codewars.com/kata/56dbe7f113c2f63570000b86/train/typescript

export const rot = (chain: string): string =>
	chain
		.split('\n')
		.reverse()
		.map((value) => value.split('').reverse().join(''))
		.join('\n');

export const selfieAndRot = (chain: string): string => {
	const chainSide = chain
		.split('\n')
		.map((value) => value + '.'.repeat(value.length));
	const rotSide = rot(chain)
		.split('\n')
		.map((value, index) => '.'.repeat(value.length) + value);
	return [...chainSide, ...rotSide].join('\n');
};

export const oper = (fn: (chain: string) => string, chainCb: string): string =>
	fn(chainCb);
