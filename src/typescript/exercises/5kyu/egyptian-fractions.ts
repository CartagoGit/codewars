//* https://www.codewars.com/kata/54f8693ea58bce689100065f/train/typescript

import { getGreatestCommonDivisior } from '../../helpers/greatest-common-divisor';

export function decompose(fractionString: string): string[] {
	if (fractionString.includes('.')) {
		const [integer, decimal] = fractionString.split('.');
		fractionString = `${integer}${decimal}/${10 ** decimal.length}`;
	}
	let [numerator, denominator] = fractionString.split('/').map(Number);
	const result: string[] = [];
	if (numerator === 0) return result;
	if (numerator % denominator === 0) return [`${numerator / denominator}`];

	while (numerator > 0) {
		const unitDenominator = Math.ceil(denominator / numerator);
		if (1 % unitDenominator === 0) result.push(`${1 / unitDenominator}`);
		else result.push(`1/${unitDenominator}`);
		numerator = numerator * unitDenominator - denominator;
		denominator *= unitDenominator;
	}

	return result;
}
