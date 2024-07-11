//* https://www.codewars.com/kata/544d114f84e41094a9000439/train/typescript

export function powerOf4(n: any): boolean {
	console.log(n);
	if (typeof n !== 'number') return false;
	const sqrt4 = Math.log(n) / Math.log(4);
	console.log({ sqrt4, log: Math.log(n), log4: Math.log(4) });
	return sqrt4 === Math.abs(sqrt4);
}
