//* https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/typescript

export function circleArea(radius: number): number {
	if (radius <= 0) throw new Error();
	return Math.PI * Math.pow(radius, 2);
}
