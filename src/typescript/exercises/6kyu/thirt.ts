//* https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript

export function thirt(n: number): number {
	const sequence = [1, 10, 9, 12, 3, 4];
	const recursive = (n: number): number => {
		const newN = n
			.toString()
			.split('')
			.reverse()
			.reduce((acc, digit, index) => {
				return acc + Number(digit) * sequence[index % sequence.length];
			}, 0);
		if (newN === n) return n;
		return recursive(newN);
	};
	return recursive(n);
}
