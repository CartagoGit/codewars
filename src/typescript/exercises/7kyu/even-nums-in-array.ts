//* https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/typescript

export function evenNumbers(array: number[], n: number): number[] {
	return array.filter((num) => num % 2 === 0).slice(-n);
}
