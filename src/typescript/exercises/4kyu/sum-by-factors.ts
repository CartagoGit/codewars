//* https://www.codewars.com/kata/54d496788776e49e6b00052f/train/typescript

export const sumOfDivided = (list: number[]): number[][] => {
	const sumMap = new Map<number, number>();
	for (const num of list) {
		// Get just the unique prime factors of the number
		const factors = [...new Set<number>(getPrimeFactors(num)).values()];
		for (const factor of factors) {
			sumMap.set(
				factor,
				(sumMap.has(factor) ? sumMap.get(factor)! : 0) + num
			);
		}
	}
	// Sort the map by factors
	return [...sumMap.entries()].sort((a, b) => a[0] - b[0]);
};

//* Get Prime factors from a number
const getPrimeFactors = (num: number): number[] => {
	const factors: number[] = [];
	let factor = 2;
	while (factor <= Math.abs(num)) {
		if (num % factor === 0) {
			factors.push(factor);
			num /= factor;
		} else factor++;
	}
	return factors;
};
