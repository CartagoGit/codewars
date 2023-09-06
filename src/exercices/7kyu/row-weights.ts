//* https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/typescript

export function rowWeights(arr: number[]) {
	return arr.reduce(
		(acc, weight, index) => {
			acc[index % 2] += weight;
			return acc;
		},
		[0, 0]
	);
}
