//* https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/typescript

export function quadraticFormula(
	y1: number,
	y2: number,
	y3: number
): [string, number, number] {
	// Calculamos los coeficientes de la fórmula
	const a = y3 - 2 * y2 + y1;
	const b = y2 - y1;
	const c = y1;

	// Construimos la fórmula en el formato adecuado
	let formula = `x^2`;
	if (b !== 0) {
		formula += b > 0 ? `+${b}x` : `${b}x`;
	}
	if (c !== 0) {
		formula += c > 0 ? `+${c}` : `${c}`;
	}

	// Calculamos los siguientes dos términos de la secuencia
	const y4 = a + 3 * b + 3 * c;
	const y5 = a + 4 * b + 6 * c;

	return [formula, y4, y5];
}
