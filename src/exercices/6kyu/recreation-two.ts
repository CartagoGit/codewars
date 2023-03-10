export const initRecreationTwo = () => {
	// return prod2sum(100, 100, 100, 100);
	return prod2sum(143, 43, 32, 236);
	// return prod2sum(78, 41, 52, 103);
};

export const prod2sum = (
	a: number,
	b: number,
	c: number,
	d: number
): number[][] => {
	const ab = Math.pow(a, 2) + Math.pow(b, 2);
	const cd = Math.pow(c, 2) + Math.pow(d, 2);
	const n = Math.abs(ab) * Math.abs(cd);
	console.log({ a, b, c, d, n, ab, cd });
	const result = getCombinations(n);

	return result;
};

const getCombinations = (n: number): number[][] => {
	const combinations: number[][] = [];
	for (let i = 1; i < n; i++) {
		const iPow = Math.pow(i, 2);
		if (combinations.length == 2 || iPow > n) break;
		for (let j = i; j < n; j++) {
			if (combinations.length == 2) break;
			const jPow = Math.pow(j, 2);
			const posibleResult = iPow + jPow;
			if (posibleResult > n) break;
			if (posibleResult !== n) continue;
			combinations.push([i, j]);
		}
	}
	return combinations;
};
