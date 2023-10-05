//* https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/typescript

export function findNb(m: number): number {
	for (let n = 0; n < m; n++) {
		m -= Math.pow(n, 3);
		if (m === 0) return n;
	}
    return -1;
}
