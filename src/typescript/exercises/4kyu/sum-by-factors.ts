//* https://www.codewars.com/kata/54d496788776e49e6b00052f/train/typescript

//* Get Prime factors from a number
function getPrimeFactors(num: number): number[] {
	const factors: number[] = [];
	let factor = 2;
	while (factor <= Math.abs(num)) {
		if (num % factor === 0) {
			factors.push(factor);
			num /= factor;
		} else factor++;
	}
	return factors;
}

export function sumOfDivided(list: number[]): number[][] {
	console.log({ list });
	const sumMap = new Map<number, number>();

	for (const num of list) {
		const factors = getPrimeFactors(num);
		console.log({ num, factors });
		for (const factor of factors) {
			if (!sumMap.has(factor)) {
				sumMap.set(factor, 0);
			}
			sumMap.set(factor, sumMap.get(factor)! + num);
		}
	}
	console.log({ sumMap });

	const sortedSumMap = [...sumMap.entries()].sort((a, b) => a[0] - b[0]);

	const result: number[][] = sortedSumMap.map(([factor, sum]) => [
		factor,
		sum,
	]);

	return result;
}
