//* https://www.codewars.com/kata/5517fcb0236c8826940003c9/train/typescript

export function sumFracts(list: number[][]): string | null {
	if ([...list].flat().length === 0) return null;
	const lcm = (a: number, b: number) => {
		return Math.abs(a * b) / gcd(a, b);
	};
	const gcd = (a: number, b: number): number => {
		return b === 0 ? a : gcd(b, a % b);
	};
	const sum = list.reduce(
		(acc, [num, den]) => {
			const common = acc[1] * den;
			return [acc[0] * (common / acc[1]) + num * (common / den), common];
		},
		[0, 1]
	);
	const [num, den] = sum;
	const divisor = gcd(num, den);
	return num % den === 0
		? (num / den).toString()
		: `[${num / divisor}, ${den / divisor}]`;
}
