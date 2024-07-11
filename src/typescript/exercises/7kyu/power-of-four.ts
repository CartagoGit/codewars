//* https://www.codewars.com/kata/544d114f84e41094a9000439/train/typescript

export function powerOf4(n: any): boolean {
	return typeof n === 'number' && Number.isInteger(Math.log(n) / Math.log(4));
}
