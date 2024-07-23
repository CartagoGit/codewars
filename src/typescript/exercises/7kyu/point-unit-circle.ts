//* https://www.codewars.com/kata/58da7ae9b340a2440500009c/train/typescript

export function pointInCircle(x: number, y: number): boolean {
	return Math.sqrt(x * x + y * y) < 1;
}
