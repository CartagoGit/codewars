//* https://www.codewars.com/kata/5547cc7dcad755e480000004/train/typescript

export function removeNb(n: number): number[][] {
	let pairsExcluded: number[][] = [];
	const sumTotal = (n * (n + 1)) / 2;
	for (let a = 1; a <= n; a++) {
		const b = (sumTotal - a) / (a + 1);
		if (b < a) break;
		if (!Number.isInteger(b) || b > n) continue;
		pairsExcluded.push([a, b], [b, a]);
	}
	return pairsExcluded.sort((a, b) => a[0] - b[0]);
}

