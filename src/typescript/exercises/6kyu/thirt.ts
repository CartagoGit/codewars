//* https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript

const sequence = [1, 10, 9, 12, 3, 4];

export function thirt(n: number): number {
	const newN = `${n}`
		.split('')
		.reverse()
		.reduce(
			(acc, digit, index) =>
				acc + Number(digit) * sequence[index % sequence.length],
			0
		);
	if (newN === n) return n;
	return thirt(newN);
}
