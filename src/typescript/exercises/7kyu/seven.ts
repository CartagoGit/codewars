//* https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/typescript

export function seven(m: number): number[] {
	let counter = 0;
	while (m > 99) {
		const [lastNum, restNums] = [m % 10, Math.floor(m / 10)];
		m = restNums - lastNum * 2;
		counter++;
	}
	return [m, counter];
}
