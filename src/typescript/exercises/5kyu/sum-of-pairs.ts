//* https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript

export function sumPairs(
	nums: number[],
	sum: number
): [number, number] | undefined {
	const uniques = [...new Set(nums).values()];

	for (let i = 0; i < uniques.length; i++) {
		for (let j = i + 1; j < uniques.length; j++) {
			if (uniques[i] + uniques[j] === sum)
				return [uniques[i], uniques[j]];
		}
	}
	return undefined;
}
