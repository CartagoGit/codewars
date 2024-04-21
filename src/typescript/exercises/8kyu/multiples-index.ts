//* https://www.codewars.com/kata/5a34b80155519e1a00000009/train/typescript

export function multipleOfIndex(array: number[]): number[] {
	return array.filter((num, index) => num === 0 || num % index === 0);
}
