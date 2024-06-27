//* https://www.codewars.com/kata/5517fcb0236c8826940003c9/train/typescript

export function sumFracts(list: number[][]): string | null {
	if ([...list].flat().length === 0) return null;
	const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
	const [num, den] = list.reduce(
		([accNum, accDen], [currNum, currDen]) => {
			const common = accDen * currDen;
			return [
				accNum * (common / accDen) + currNum * (common / currDen),
				common,
			];
		},
		[0, 1]
	);
	const divisor = gcd(num, den);
	return num % den === 0
		? (num / den).toString()
		: `[${num / divisor}, ${den / divisor}]`;
}
