//* https://www.codewars.com/kata/5a7778790136a132a00000c1/train/typescript

export function singleDigit(n: number): number {
	while (n.toString().length > 1) {
		const binary = n.toString(2);
		n = binary
			.toString()
			.split('')
			.reduce((acc, cur) => acc + parseInt(cur), 0);
	}
	return n;
}
