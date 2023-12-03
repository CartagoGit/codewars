//* https://www.codewars.com/kata/52f3149496de55aded000410/typescript

export function sumDigits(n: number): number {
	return Math.abs(n)
		.toString()
		.split('')
		.reduce((acc, curr) => acc + Number(curr), 0);
}
