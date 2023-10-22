//* https://www.codewars.com/kata/554f76dca89983cc400000bb/train/typescript

// x2 - 4 * y2 = n
// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
export function solequa(num: number): [number, number][] {
	const solutions: [number, number][] = [];
	const sqrt = Math.sqrt(num);
	for (let i = 1; i <= sqrt; i++) {
		if (num % i !== 0) continue;
		const divisor = num / i;
		const x = (divisor + i) / 2;
		const y = (divisor - i) / 4;
		if ([x, y].every(Number.isInteger)) solutions.push([x, y]);
	}
	return solutions;
}
