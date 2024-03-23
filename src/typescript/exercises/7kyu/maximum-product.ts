//* https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/typescript

export function adjacentElementsProduct(arr: number[]): number {
	let products = [];
	for (let i = 1; i < arr.length; i++) {
		products.push(arr[i - 1] * arr[i]);
	}
	return Math.max(...products);
}
