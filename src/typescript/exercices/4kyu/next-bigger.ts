export const initNextBigger = () => {
	return nextBigger(123456789);
};

export const nextBigger = (n: number): number => {
	// Convertir el número en una matriz de dígitos
	const digits = n
		.toString()
		.split("")
		.map((digit) => Number(digit));

	// Encontrar el par de elementos consecutivos donde el elemento izquierdo es menor que el derecho
	let i = digits.length - 2;
	while (i >= 0 && digits[i] >= digits[i + 1]) {
		i--;
	}

	// Si no se encuentra tal par, entonces el número ya es el más grande posible
	if (i < 0) return -1;

	// Encontrar el elemento más pequeño a la derecha del par encontrado que sea mayor al elemento izquierdo
	let j = digits.length - 1;
	while (j > i && digits[j] <= digits[i]) {
		j--;
	}

	// Intercambiar los dos elementos encontrados
	[digits[i], digits[j]] = [digits[j], digits[i]];

	// Ordenar los elementos a la derecha del par encontrado de manera ascendente
	const sortedDigits = [
		...digits.slice(0, i + 1),
		...digits.slice(i + 1).sort(),
	];

	// Convertir la matriz de dígitos resultante en un número
	return Number(sortedDigits.join(""));
};
