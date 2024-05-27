//* https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/typescript

export function drawStairs(n: number): string {
	return Array.from({ length: n }, (_, i) => ' '.repeat(i) + 'I').join('\n');
}
