//*  https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript

export function well(x: string[]): string {
	const timesGood = x.filter((chain) => chain === 'good').length;
	return timesGood > 2
		? 'I smell a series!'
		: timesGood === 0
		? 'Fail!'
		: 'Publish!';
}
