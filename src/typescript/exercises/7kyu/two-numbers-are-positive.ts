//* https://www.codewars.com/kata/602db3215c22df000e8544f0/train/typescript

export function twoArePositive(a: number, b: number, c: number): boolean {
	return [a, b, c].filter((num) => num > 0).length === 2;
}
