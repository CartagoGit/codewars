//* https://www.codewars.com/kata/5913152be0b295cf99000001/train/typescript

export const divisions = (n: number, divisor: number): number => {
	let count = 0;
	while (n >= divisor) {
		n = Math.floor(n / divisor);
		count++;
	}
	return count;
};
