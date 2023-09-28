//* https://www.codewars.com/kata/54f8693ea58bce689100065f/train/typescript

import { getGreatestCommonDivisior } from '../../helpers/greatest-common-divisor';

export function decompose(n: string): string[] {
	let [numerator, denominator] = n.split('/').map(Number);
	if (numerator === 0) return [];
	let result: string[] = [];
	while (numerator > 0) {
		// Calculamos la siguiente fracción egipcia
		const nextDenominator = Math.ceil(denominator / numerator);
		const nextNumerator = 1;

		// Agregamos la fracción a la lista de resultados
		result.push(`1/${nextDenominator}`);

		// Actualizamos el numerador y denominador para la siguiente iteración
		numerator = nextNumerator * denominator - nextDenominator * numerator;
		denominator = nextDenominator * denominator;

		// Simplificamos la fracción si es posible
		const commonDivisor = getGreatestCommonDivisior([
			numerator,
			denominator,
		]);
		numerator /= commonDivisor;
		denominator /= commonDivisor;
	}

	return result;
}
