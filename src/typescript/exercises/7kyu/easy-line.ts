//* https://www.codewars.com/kata/56e7d40129035aed6c000632/train/typescript

export function easyLine(n: number): number {
	let sumOfSquares = 0;
	for (let k = 0; k <= n; k++) {
		const coeff = binomialCoefficient(n, k);
		sumOfSquares = coeff * coeff + sumOfSquares;
	}
	// Aplicando la aproximación logarítmica para evitar problemas con números muy grandes
	return Math.round(Math.log(Number(sumOfSquares)));
}

function factorial(n: number): number {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
}

function binomialCoefficient(n: number, k: number): number {
	return factorial(n) / factorial(k) / factorial(n - k);
}
