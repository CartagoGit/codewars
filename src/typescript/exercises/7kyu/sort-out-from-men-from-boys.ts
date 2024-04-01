//* https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/typescript

export function menFromBoys(arr: number[]): number[] {
	const uniqueValues = [...new Set(arr)];
	const [evens, odds] = uniqueValues.reduce(
		(acc, curr) => {
			acc[curr % 2 === 0 ? 0 : 1].push(curr);
			return acc;
		},
		[[], []] as number[][]
	);
	return [...evens.sort((a, b) => a - b), ...odds.sort((c, d) => d - c)];
}
