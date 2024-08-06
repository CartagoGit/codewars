//* https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/typescript

export function jumpingNumber(n: number) {
	if (n < 10) return 'Jumping!!';
	const num = n.toString().split('').map(Number);
	for (let i = 1; i < num.length; i++) {
		if (Math.abs(num[i] - num[i - 1]) !== 1) return 'Not!!';
	}
	return 'Jumping!!';
}
