//* https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/typescript

export const seven = (num: number, counter = 0): number[] => {
	if (num < 100) return [num, counter];
	const [lastNum, restNums] = [num % 10, Math.floor(num / 10)];
	return seven(restNums - lastNum * 2, counter + 1);
};

//* Solucion 1
// export function seven(m: number): number[] {
// 	let counter = 0;
// 	while (m > 99) {
// 		const [lastNum, restNums] = [m % 10, Math.floor(m / 10)];
// 		m = restNums - lastNum * 2;
// 		counter++;
// 	}
// 	return [m, counter];
// }
