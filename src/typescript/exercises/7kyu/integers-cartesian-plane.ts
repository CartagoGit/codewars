//* https://www.codewars.com/kata/559e3224324a2b6e66000046/train/typescript

export function sumin(n: number): number {
	return createTable(n, 'min')
		.flat()
		.reduce((acc, curr) => acc + curr, 0);
}
export function sumax(n: number): number {
	return createTable(n, 'max')
		.flat()
		.reduce((acc, curr) => acc + curr, 0);
}
export function sumsum(n: number): number {
	return sumin(n) + sumax(n);
}

const createTable = (n: number, kind: 'min' | 'max') => {
	return Array.from({ length: n }, (_, rowIndex) => {
		return Array.from({ length: n }, (_, columnIndex) => {
			if (kind === 'max') return Math.max(columnIndex + 1, rowIndex + 1);
			else return Math.min(columnIndex + 1, rowIndex + 1);
		});
	});
};
