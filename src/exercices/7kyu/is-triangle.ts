//* https://www.codewars.com/kata/56606694ec01347ce800001b/train/typescript

export function isTriangle(a: number, b: number, c: number): boolean {
	return a + b > c && a + c > b && b + c > a;
}
