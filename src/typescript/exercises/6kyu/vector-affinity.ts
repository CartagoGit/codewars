//* https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/typescript

export const vectorAffinity = function vectorAffinity(
	xs: Array<number | null>,
	ys: Array<number | null>
): number {
	const sameResults = xs.filter((x, i) => x === ys[i]);
	const result = sameResults.length / Math.max(xs.length, ys.length);
	if (isNaN(result)) {
		if (xs.length === 0 && ys.length === 0) return 1;
		return 0;
	}
	return result;
};
