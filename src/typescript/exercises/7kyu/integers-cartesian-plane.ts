//* https://www.codewars.com/kata/559e3224324a2b6e66000046/train/typescript

export const sumin = (n: number): number => iterationSum(n, 'min');

export const sumax = (n: number): number => iterationSum(n, 'max');

export const sumsum = (n: number): number => sumin(n) + sumax(n);

const iterationSum = (num: number, kind: 'min' | 'max'): number => {
	let sum = 0;
	for (let rowIndex = 1; rowIndex <= num; rowIndex++) {
		for (let columnIndex = 1; columnIndex <= num; columnIndex++) {
			if (kind === 'max') sum += Math.max(columnIndex, rowIndex);
			else if (kind === 'min') sum += Math.min(columnIndex, rowIndex);
		}
	}
	return sum;
};

//* Solucion que funciona pero que la kata da como timeout
// export function sumin(n: number): number {
// 	return createTable(n, 'min')
// 		.flat()
// 		.reduce((acc, curr) => acc + curr, 0);
// }
// export function sumax(n: number): number {
// 	return createTable(n, 'max')
// 		.flat()
// 		.reduce((acc, curr) => acc + curr, 0);
// }
// export function sumsum(n: number): number {
// 	return sumin(n) + sumax(n);
// }

// const createTable = (n: number, kind: 'min' | 'max') => {
// 	return Array.from({ length: n }, (_, rowIndex) => {
// 		return Array.from({ length: n }, (_, columnIndex) => {
// 			if (kind === 'max') return Math.max(columnIndex + 1, rowIndex + 1);
// 			else return Math.min(columnIndex + 1, rowIndex + 1);
// 		});
// 	});
// };
