//* https://www.codewars.com/kata/5a55f04be6be383a50000187/train/typescript

export function specialNumber(n: number) {
	return n
		.toString()
		.split('')
		.every((digit) => Number(digit) <= 5)
		? 'Special!!'
		: 'NOT!!';
}
