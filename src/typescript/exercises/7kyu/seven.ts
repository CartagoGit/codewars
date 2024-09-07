//* https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/typescript

export function seven(m: number): number[] {
	let counter = 0;
	if (m < 100) return [m, counter];
	do {
		const [lastValue, ...restValues] = m.toString().split('').reverse();
		const lastNum = parseInt(lastValue);
		const restNum = parseInt(restValues.reverse().join(''));
		m = restNum - lastNum * 2;
		counter++;
	} while (m > 99);
	return [m, counter];
}
