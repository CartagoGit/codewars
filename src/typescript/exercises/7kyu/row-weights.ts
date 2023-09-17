//* https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/typescript

export const rowWeights = (arr: number[]) =>
	arr.reduce(
		(acc, weight, index) => ((acc[index % 2] += weight), acc),
		[0, 0]
	);


