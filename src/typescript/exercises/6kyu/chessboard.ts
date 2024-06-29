//* https://www.codewars.com/kata/55ab4f980f2d576c070000f4/train/typescript

export function game(length: number): number[] {
	if (length === 0) return [0];
	const table = Array.from({ length }, (_, i) =>
		Array.from({ length }, (_, j) => [j + 1, i + j + 2])
	);
	const lcm = (a: number, b: number) => (a * b) / gcd(a, b);
	const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
	const lcmArr = (arr: number[]): number => arr.reduce(lcm);
	const flatTable = table.flat();
	const denominators = flatTable.map(([, den]) => den);
	const tableLcm = lcmArr(denominators);
	const [finalNum, finalDen] = flatTable.reduce(
		([accNum, _accDen], [currNum, currDen]) => {
			const lcmNum = tableLcm / currDen;
			const num = accNum + currNum * lcmNum;
			return [num, tableLcm];
		},
		[0, 0]
	);
	return finalNum % finalDen === 0
		? [finalNum / finalDen]
		: [finalNum, finalDen];
}

console.log(game(25));
