//* https://www.codewars.com/kata/580755730b5a77650500010c/train/typescript

export const sortMyString = (chain: string): string => {
	let odd = '';
	let even = '';
	for (let [index, char] of chain.split('').entries()) {
		index % 2 === 0 ? (odd += char) : (even += char);
	}
	return `${odd} ${even}`;
};
