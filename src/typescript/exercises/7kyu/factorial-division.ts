//* https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31/train/typescript

export function factorialDivision(n: bigint, d: bigint) {
	let result = 1n;
	for (let i = n; i > d; i--) {
		result = i * result;
	}
	return result;
}
