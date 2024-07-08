//* https://www.codewars.com/kata/57fe50d000d05166720000b1/train/typescript

export function sabb(s: string, val: number, happiness: number): string {
	const sabbatical = 'sabbatical'.split('');
	const sPoints = s
		.split('')
		.filter((char) => sabbatical.includes(char)).length;
	return sPoints + val + happiness > 22
		? 'Sabbatical! Boom!'
		: 'Back to your desk, boy.';
}
