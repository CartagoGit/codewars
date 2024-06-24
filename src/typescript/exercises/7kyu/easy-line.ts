//* https://www.codewars.com/kata/56e7d40129035aed6c000632/train/typescript

export function easyLine(n: number): number {
	let sumOfSquares = 0n;
	for (let k = 0; k <= n; k++) {
		const coeff = binomialCoefficient(n, k);
		sumOfSquares = sumOfSquares + BigInt(coeff.toString()) * BigInt(coeff.toString());
	}
	// Aplicando la aproximación logarítmica para evitar problemas con números muy grandes
	return Math.round(Math.log(Number(sumOfSquares)));
}

function factorial(n: number): bigint {
	let result = 1n;
	for (let i = 2n; i <= n; i++) {
		result *= i;
	}
	return result;
}

function binomialCoefficient(n: number, k: number): bigint {
	return factorial(n) / factorial(k) / factorial(n - k);
}
