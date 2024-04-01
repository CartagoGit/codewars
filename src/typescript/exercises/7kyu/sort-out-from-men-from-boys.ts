//* https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/typescript

export function menFromBoys(arr: number[]): number[] {
	const [evens, odds] = arr
		.reduce(
			(acc, curr) => {
				curr % 2 === 0 ? acc[0].add(curr) : acc[1].add(curr);
				return acc;
			},
			[new Set(), new Set()] as Set<number>[]
		)
		.map((set) => [...set]);
	return [...evens.sort((a, b) => a - b), ...odds.sort((c, d) => d - c)];
}
