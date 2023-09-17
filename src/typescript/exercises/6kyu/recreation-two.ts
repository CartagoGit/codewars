export const initRecreationTwo = () => {
	return prod2sum(100, 100, 100, 100);
	// return prod2sum(143, 43, 32, 236);
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
	const posibilities: number[] = getPosibilities({ a, b, c, d });
	const result = getCombinations(n, posibilities);

	return result;
};

const getCombinations = (n: number, posibilities: number[]): number[][] => {
	const combinations: number[][] = [];
	for (let posibility1 of posibilities) {
		if (combinations.flat().includes(posibility1)) continue;
		for (let posibility2 of posibilities) {
			if (
				combinations.flat().includes(posibility2) ||
				Math.pow(posibility1, 2) + Math.pow(posibility2, 2) !== n
			)
				continue;
			combinations.push([posibility1, posibility2].sort((a, b) => a - b));
		}
	}
	return combinations.sort((a, b) => a[0] - b[0]);
};

const getPosibilities = (abcd: {
	a: number;
	b: number;
	c: number;
	d: number;
}): number[] => {
	const { a, b, c, d } = abcd;
	return [
		a * b + c * d,
		a * c + b * d,
		a * d + b * c,
		a * b - c * d,
		a * c - b * d,
		a * d - b * c,
	].map((n) => Math.abs(n));
};
