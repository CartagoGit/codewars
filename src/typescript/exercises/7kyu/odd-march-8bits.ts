//* https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/typescript

export function bitMarch(n: number): number[][] {
	let result: number[][] = [];
	const numBits = 8;
	let initBits = Array(numBits)
		.fill(0)
		.map((_, i) => (i < numBits - n ? 0 : 1));
	result.push(initBits);
	while (initBits[0] === 0) {
		initBits = initBits.slice(1).concat([0]);
		result.push(initBits);
	}
	return result;
}
