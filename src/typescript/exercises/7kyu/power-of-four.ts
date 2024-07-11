//* https://www.codewars.com/kata/544d114f84e41094a9000439/train/typescript

export function powerOf4(n: any): boolean {
	if (typeof n !== 'number' || n === 0) return false;
	const sqrt4 = Math.log(n) / Math.log(4);
	return sqrt4 === Math.floor(sqrt4);
}
