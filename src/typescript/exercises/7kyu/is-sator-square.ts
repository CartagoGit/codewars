//* https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/typescript

export function isSatorSquare(tablet: string[][]): boolean {
	const n = tablet.length;

	// Verificar que el tamaño del cuadrado sea válido
	if (n < 2 || n > 33) return false;

	// Función auxiliar para verificar si una palabra puede ser leída en todas las direcciones
	const isValidWord = (word: string): boolean => {
		const reversedWord = word.split('').reverse().join('');
		return (
			word === reversedWord &&
			word === word.split('').reverse().join('') &&
			word ===
				word
					.split('\n')
					.map((row) => row.split('').reverse().join(''))
					.join('\n')
		);
	};

	// Iterar sobre cada fila y columna para verificar si todas las palabras son válidas
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const word = tablet[i].slice(j, j + n).join('');
			if (!isValidWord(word)) return false;
		}
	}

	return true;
}
